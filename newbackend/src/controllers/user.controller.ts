import { Request, Response } from 'express'
import generalResponse from '../helper/generalResponse.helper'
import { createUserRepo,getUserRepo,generateToken, createToken,getToken,userActivation } from '../repositories/user.repository';

export const createUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body,"create user body")
    const result = await createUserRepo(req.body.values);
    console.log(result, "result");

    return generalResponse(res, result)

  } catch (error) {
    console.log(error);
    return generalResponse(res, error, '', 'error', false, 400)
  }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const result = await getUserRepo();

    return generalResponse(res, result)

  } catch (error) {
    console.log(error);
    return generalResponse(res, error, '', 'error', false, 400)
  }
}

export const createActivationToken=async(req:Request,res:Response)=>{
  try{
    console.log(req.body.obj);

    const token = await generateToken(req.body.obj);
    console.log(token)

    const result=await createToken(token,req.body.obj.id)
    console.log(result)

    return generalResponse(res, result)

  }catch(error){
    console.log(error);
    return generalResponse(res, error, '', 'error', false, 400)
  }
}

export const getActivationToken=async(req:Request,res:Response)=>{
  try{
    const token=await getToken(req.params.email);
    console.log(token,"controller token")
    return generalResponse(res, token)
  }catch(error){
    console.log(error);
    return generalResponse(res, error, '', 'error', false, 400)
  }
}

export const checkActivation=async(req:Request,res:Response)=>{
  try{
    const {token,email}=req.params;

    const result=await userActivation(token,email);
    console.log(result,"check activation resultttttttt");

    return generalResponse(res, result)

  }catch(error){
    console.log(error);
    return generalResponse(res, error, '', 'error', false, 400)
  }
}