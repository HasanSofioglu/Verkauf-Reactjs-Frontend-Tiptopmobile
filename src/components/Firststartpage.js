import React from 'react';
import '../modern.css';
import { useNavigate} from "react-router-dom";
import mockup from "../assets/MainPagePhone.png";

const Firststartpage = () => {


const navigate = useNavigate();
  return (
    <div>
      
      <br></br>
      <br></br>
       <h1 className='home-title'>
       <img  src = {mockup} width="700" alt='dhl logo' ></img>
  <span>Möchten Sie Telefone persönlich oder als Unternehmen verkaufen?</span>
 
</h1>
<section id="folders">

<article onClick={()=>{
  navigate("/models");
}} >Persönlich</article>
<article onClick={()=>{
  navigate("/contact");
}} >Gesellschaft</article>
</section>

<br></br>


        
       <div className="timeline">
     
        <div className="entry">
  
          <div className="title">
            <h3>Hanymodel finden</h3>
            <p>1</p>
          </div>
          <div className="bodyTime">
            <p>Wählen Sie Ihr Telefonmodell entsprechend dem Zustand Ihres Handys.</p>
         
          </div>
        </div>
        <div className="entry">
          <div className="title">
            <h3>Fülle das Formular </h3>
            <p>2</p>
          </div>
          <div className="bodyTime">
            <p>After getting the preliminary price. Fill in our form.</p>
    
          </div>
        </div>
        <div className="entry">
          <div className="title">
            <h3>Senden Sie uns</h3>
            <p>3</p>
          </div>
          <div className="bodyTime">
            <p>Senden Sie uns Ihr Gerät oder geben Sie es in unseren Filialen ab. Erhalten Sie Ihre Zahlung sofort, nachdem Sie Ihr Telefon überprüft haben.</p>
          
          </div>
        </div>
      </div>
      </div>

       

  )
}

export default Firststartpage