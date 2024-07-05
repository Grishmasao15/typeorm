import { User } from "../../typeorm/entities/User"
import { AppDataSource } from "../config/data-source";
import jwt from 'jsonwebtoken';
import { config } from 'dotenv'
import bcrypt from 'bcrypt';
config()

// const user = new User()
// user.firstname = "Grishma";
// user.lastname = "Sao";
// user.email = "grishma15@gmail.com";
// user.contactnumber = "9316836458";
// user.dob = new Date('2002-10-15');
// user.gender = "female"

export const userRepository = AppDataSource.getRepository(User)

export const generateToken = (user: any) => {
    const AUTH_SECRET_KEY: string = process.env.SECRET_KEY ?? 'asJHDv3564gb';
    return jwt.sign({ email: user.email,id:user.id}, AUTH_SECRET_KEY, { expiresIn: '1d' });
  };

export const createUserRepo = async (data: any) => {

  console.log(data, "dataaaa");
  const user = new User();
  user.firstname = data.fname;
  user.lastname = data.lname;
  user.email = data.email;
  user.contactnumber = data.phone;
  user.dob = new Date(data.dob);
  user.gender = data.gender


  const bcryptsalt= bcrypt.genSaltSync(10);
  let hashPassword =await bcrypt.hash(data.password,bcryptsalt);
  console.log(hashPassword)

  user.password=hashPassword;

  console.log(user,"create user repo user dataaaaaaa")

  return await userRepository.save(user)
}

export const getUserRepo = async () => {

  try {
    console.log("in getUser Repoooooo");

    const users = await userRepository.find()
    console.log("All users from the db: ", users)

    return await userRepository.find();
  }
  catch (err) {
    console.log(err);
  }

}

export const createToken=async(token:string,id:number)=>{
  try{
    const user= await userRepository.findOneBy({
    id: id,
    })
    if(user!==null){
      user.activation_token = token
      user.token_createdAt=new Date();
      return await userRepository.save(user)
    }


  }catch(err){
    console.log(err)
  }
}

export const getToken=async(email:string)=>{
  try{
    const data= await userRepository.findOneBy({
    email: email,
    })
    return data?.activation_token
  }catch(error){
    console.log(error)
  }
}

export const userActivation=async(token:string,email:string)=>{
  try{
   const data= await userRepository.findOneBy({
    email: email,
    })
    console.log(data,"daytfashgdfas")
    
    const diff: number = Number(new Date(Date.now())) - Number(new Date(data!.token_createdAt));
    const mins: number = Math.floor((diff % 86400000) / 60000);

    if(mins>10){
      return "link expired"
    }
    else{
      data!.is_active=true;
      return await userRepository.save(data!)
      
    }

  }catch(error){
    console.log(error)
  }
}


