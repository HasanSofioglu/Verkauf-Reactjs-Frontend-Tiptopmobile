import React from 'react'
import applelogo from "../assets/applelogo.png";
import samsunglogo from "../assets/samsunglogo.png";
import milogo from "../assets/milogo.png";
import googlelogo from "../assets/googlelogo.png";
import honorlogo from "../assets/honorlogo.png";
import { useNavigate} from "react-router-dom";


 const Phonemodelspage = () => {
  const navigate = useNavigate();
  return (

    <div>
     
       <h1> Wählen Sie Ihre Telefonmarke aus.</h1>

<div className="form__group field">
  <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" className="form__label">Telefonnamen suchen</label>
</div>


       <main>

<figure onClick={()=>{  
  navigate("/phones/apple");
}} style={{ 
      backgroundImage: `url(${applelogo})` 
    }}  >
    <figcaption >Apple</figcaption>
  </figure>
    
  <figure  onClick={()=>{  
  navigate("/phones/samsung");
}}
  style={{ 
      backgroundImage: `url(${samsunglogo})` 
    }}  >
    <figcaption>Samsung</figcaption>
  </figure>


  <figure  onClick={()=>{  
  navigate("/phones/xiaomi",{state: {
    brand: "xiaomi"
  }});
}}  style={{ 
      backgroundImage: `url(${milogo})` 
    }} >
    <figcaption>Xiaomi</figcaption>
  </figure>


  <figure onClick={()=>{  
  navigate("/phones/google");
}}  style={{ 
      backgroundImage: `url(${googlelogo})` 
    }} >
    <figcaption>Google</figcaption>
  </figure>
  <figure onClick={()=>{  
  navigate("/phones/honor");
}} style={{ 
      backgroundImage: `url(${honorlogo})` 
    }} >
    <figcaption>Honor</figcaption>
  </figure>
</main>
    </div>
  
    )
}
export default Phonemodelspage