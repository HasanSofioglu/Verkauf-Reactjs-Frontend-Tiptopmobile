import React from 'react'
import {  useNavigate} from "react-router-dom";
const Successpage = () => {
  const navigate = useNavigate();

  return (
   
            <div>
              <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet" />
              <style dangerouslySetInnerHTML={{__html: "\n      body {\n        text-align: center;\n        padding: 200px 0;\n       \n      }\n        h1 {\n          color: #42ab69;\n          font-family: \"Nunito Sans\", \"Helvetica Neue\", sans-serif;\n          font-weight: 900;\n          font-size: 40px;\n          margin-bottom: 10px;\n  \n          margin-top: -30px;\n         }\n        p {\n          color: #404F5E;\n          font-family: \"Nunito Sans\", \"Helvetica Neue\", sans-serif;\n          font-size:20px;\n          margin: 0;\n        }\n      i {\n        color: #42ab69;\n        font-size: 100px;\n        line-height: 200px;\n        margin-left:-15px;\n      }\n      .card {\n        background: white;\n        padding:40px;\n        border-radius: 1rem;\n        box-shadow: 0 2px 3px #C8D0D8;\n        display: inline-block;\n        margin: 0 auto;\n    \n   \n    }\n    " }} />
              <div className="card">
                <div style={{borderRadius: '200px', height: '200px', width: '200px', background: '#F8FAF5', margin: '0px auto'}}>
                  <i className="checkmark">✓</i>
                </div>
                <h1>Success</h1> 
                <p>Ihre Anfrage zum Verkauf eines Telefons ist eingegangen;<br /> Wir melden uns in Kürze!</p>
                <br></br>
                <button onClick={()=>{  
            navigate("/");
          }}  style={{fontFamily:'Nunito Sans', fontWeight:'800',  width:'150px', backgroundColor: '#42ab69', color: 'white', border: '1px solid #e4e4e4', padding: '20px', borderRadius: '10px', cursor: 'pointer' }}>Main Page</button>
              </div>
            </div>
  )
}

export default Successpage