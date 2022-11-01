import React, { useState, useEffect } from 'react'
import Axios from "axios";
import '../modern.css';
import { useParams } from "react-router-dom";
import {  useNavigate} from "react-router-dom";


const Phones = () => {


  const { phoneBrand } = useParams();
const[phoneModelList, setPhoneBrandList] = useState([])
const navigate = useNavigate();
useEffect(()=>{
  async function axiosget(){
    Axios.get("http://68.183.73.3:3001/api/get/"+phoneBrand).then((response)=>{

       setPhoneBrandList(response.data);

    })
  }
    axiosget();
})

  return ( <div>  
    <h1>  Phones</h1>

     <main>

    {phoneModelList.map((val)=>{
       return (
           <figure onClick={()=>{  
            navigate("/detail/"+val.id);
          }} style={{ 
            backgroundImage: `url(https://api.verkauf.tiptopmobile.de/phoneImg/${val.id}.png)` 
          }} >
               <figcaption >{val.PhonesName}</figcaption>
             </figure>
       )
    })}
   </main>
   
   </div>
   
  )
}

export default Phones