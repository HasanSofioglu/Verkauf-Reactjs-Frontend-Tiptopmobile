import React, { useEffect, useState } from "react";
import Axios from "axios";
import {  useNavigate} from "react-router-dom";
import ttlogo from "../assets/ttmw.png";
export default function Registration() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");


  Axios.defaults.withCredentials = true;

   const login = async () => {
   await Axios.post("http://68.183.73.3:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);

      } else {
        
        console.log(response.data[0].username)
        setLoginStatus(response.data[0].username);
        navigate("/Phoneslist")
      }
    });
  };
  const handleSubmit =async event => {
    // 👇️ prevent page refresh
    await  event.preventDefault();
   await login();
   
    
    
  };



  useEffect(() => { 
    async function axiosget(){
        await  Axios.get("http://68.183.73.3:3001/logincheck").then((response) => {
                if (response.data.loggedIn === true) {
                  setLoginStatus(response.data.user[0].username);
                  navigate("/Phoneslist")
                }
          
        });
    }
   
    axiosget()
  });

  return (

  

    <div>
          
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      
        {/*Stylesheet*/}
        <style media="screen" dangerouslySetInnerHTML={{__html: "\n      *,\n*:before,\n*:after{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    background-color: #080710;\n}\n.background{\n    width: 430px;\n    height: 520px;\n    position: absolute;\n    transform: translate(-50%,-50%);\n    left: 50%;\n    top: 50%;\n}\n.background .shape{\n    height: 200px;\n    width: 200px;\n    position: absolute;\n    border-radius: 50%;\n}\n.shape:first-child{\n    background: linear-gradient(\n        #42ab69,\n        #42ab69\n    );\n    left: -80px;\n    top: -80px;\n}\n.shape:last-child{\n    background: linear-gradient(\n        to right,\n        #42ab69,\n        #42ab69\n    );\n    right: -30px;\n    bottom: -80px;\n}\nform{\n    height: 520px;\n    width: 400px;\n    background-color: rgba(255,255,255,0.13);\n    position: absolute;\n    transform: translate(-50%,-50%);\n    top: 50%;\n    left: 50%;\n    border-radius: 10px;\n    backdrop-filter: blur(10px);\n    border: 2px solid rgba(255,255,255,0.1);\n    box-shadow: 0 0 40px rgba(8,7,16,0.6);\n    padding: 50px 35px;\n}\nform *{\n    font-family: 'Poppins',sans-serif;\n    color: #ffffff;\n    letter-spacing: 0.5px;\n    outline: none;\n    border: none;\n}\nform h3{\n    font-size: 32px;\n    font-weight: 500;\n    line-height: 42px;\n    text-align: center;\n}\n\nlabel{\n    display: block;\n    margin-top: 30px;\n    font-size: 16px;\n    font-weight: 500;\n}\ninput{\n    display: block;\n    height: 50px;\n    width: 100%;\n    background-color: rgba(255,255,255,0.07);\n    border-radius: 3px;\n    padding: 0 10px;\n    margin-top: 8px;\n    font-size: 14px;\n    font-weight: 300;\n}\n::placeholder{\n    color: #e5e5e5;\n}\nbutton{\n margin-top: 50px;\n    width: 90%;\n    background-color: #ffffff;\n    color: #080710;\n    padding: 15px 0;\n    font-size: 18px;\n    font-weight: 600;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n\n    " }} /><div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>
      
        <form  onSubmit={handleSubmit}>
        <img src = {ttlogo} width="300" alt='dhl logo' ></img>
          <h3>Admin Panel</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Username" id="username" onChange={(e) => setUsername(e.target.value) }  />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value) }  />
          <button >Log In</button>
      
        </form>
      </div>
  );
}
