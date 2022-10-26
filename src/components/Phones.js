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
  async function fetchData(){

   await Axios.get("http://159.223.22.74:3001/api/get/"+phoneBrand).then((response)=>{

      setPhoneBrandList(response.data);

   })
 
  }
  fetchData();
})

  return ( <div>  
    <h1>  Phones</h1>

     <main>

    {phoneModelList.map((val)=>{
       return (
           <figure onClick={()=>{  
            navigate("/detail/"+val.id);
          }} style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL}/phoneImg/${val.id}.png)` 
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