import "./activationPage.css"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export const Activation = () => {

  const state = useLocation();
  const navigate = useNavigate();

  console.log(state,"activation state")
  const user_email = state.state.email
  console.log(user_email)

  const [activationlink, setActivationlink] = useState("");
  const [activationmsg, setActivationMsg] = useState("");
  const [loginlink, setLoginLink] = useState("");
  const [relink, setReLink] = useState("");



  const act_code = async () => {

    let res = await axios.get(`http://192.168.10.65:8000/get-activation-token/${user_email}`);
    console.log(res, "new token");
    const new_token = res.data.data;
    setActivationlink(new_token)
    // document.getElementById("activation-token").innerText = new_token;
    // document.getElementById("activation-token").value = new_token;

  }
  act_code();


  const activation_check = async () => {

    let res = await axios.get(`http://192.168.10.65:8000/activation-account/${activationlink}/${user_email}`);
    console.log(res, "reasqs");
    if (res.data.data.is_active) {
      setActivationMsg("Your account is activated.Click on below link to login!");
      setLoginLink("Login")
      return;
    }
    // if (resjson.message === "link activated") {
    //   navigate(`/login`);
    // }
    if(res.data.data==="link expired") {
      setActivationMsg("Link is expired.Click on below link to regenerate the link!")
      setReLink("Regenerate Link")
    }

  }

  const regenLink = async () => {
    const obj={
      id:state.state.id,
      email:state.state.email
    }
    let res = await axios.post(`http://192.168.10.65:8000/create-activation-token`, { obj })
    console.log(res,"rsgen res")
    const token = res.data.data.activation_token;

    setActivationlink(token)
    setActivationMsg("")
    setReLink("")
    act_code();



  }

  return (
    <>
      <div className="container">
        <div className="thanks-registration">
          <p className="thanks-msg">Thank You for Your Registration!</p>
          <p className="activate-msg">Click on Below Link to Activate Your Account</p>
          <p className="activate-link cursor-pointer" id="activation-token" onClick={activation_check}>{activationlink}</p>
          <p id="activated-msg">{activationmsg}</p>
          <Link to="/login" id="login-link" className="cursor-pointer">{loginlink}</Link>
          <div id="re-link" className="cursor-pointer" onClick={regenLink}>{relink}</div>
        </div>
      </div>
    </>
  )
}