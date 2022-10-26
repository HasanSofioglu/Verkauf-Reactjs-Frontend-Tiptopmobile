import React from 'react';
import '../modern.css';
import { useNavigate} from "react-router-dom";
import mockup from "../assets/mockup.png";
import trustami from "../assets/trustamitiptopmobile.jpg";
import ebay from "../assets/ebaytiptopmobile.jpg";
import google from "../assets/googletiptopmobile.jpg";

const Firststartpage = () => {


const navigate = useNavigate();
  return (
    <div>
      
      <br></br>
      <br></br>
       <h1 className='home-title'>
       <div className="cardmockup">
        <img src={mockup} className="card__image" alt="brown couch" />
        <div className="card__content">
       
          <span className="card__title">Möchten Sie Telefone persönlich oder als Unternehmen verkaufen?<span>
             
      
            </span></span> 
           
        </div>
            
      </div>
  <span></span>
 
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

<mainplaces>

  <a href="https://goo.gl/maps/BvPCBKnpP81PZbWs6" rel="noreferrer"  target="_blank">
  <figure  style={{ 
      backgroundImage: `url(${google})` 
    }} >
  
  </figure>
  </a>
  <a href="https://www.ebay.de/str/tiptopmobileshop" rel="noreferrer"  target="_blank">
  <figure  style={{ 
      backgroundImage: `url(${ebay})` 
    }} >
  
  </figure>
  </a>
  </mainplaces>
        
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
            <p>Nach Erhalt des vorläufigen Preises. Füllen Sie unser Formular aus.</p>
    
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