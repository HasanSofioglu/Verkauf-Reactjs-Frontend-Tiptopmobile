import React, { useState, useEffect } from 'react'
import './phoneList.css';

import Axios from "axios";



function PhonesList(){

const[phoneModelList, setPhoneBrandList] = useState([])

  function deletePhone(id){
 Axios.delete('http://161.35.64.20:3001/api/delete/'+id)
}

 useEffect(()=>{

  async function fetchMyAPI() {

    await Axios.get("http://161.35.64.20:3001/api/get").then((response)  =>{
  
    return  setPhoneBrandList(response.data);
   
   })
  }

fetchMyAPI()

},)




    return(
      
       <div>
      
      <div className="containerplist">
        
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Phone Id</div>
          <div className="col col-2">Name</div>
          <div className="col col-3">brand</div>
           
          <div><br></br> </div> 
          <div><br></br> </div>
          <div>
        <a href={"/Phoneslist/Add"} className="button icon-button" aria-label="Icon-only Button" style={{backgroundColor : 'lightblue'}}   height="32" viewBox="0 0 32 32" fill="none">
          <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" className="icon-button__icon" focusable="false">
            <path d="M3 3h14v14H3V3zm12 12V5H5v10h10zm-8 6v-2h12V7h2v14H7zm4-12h2v2h-2v2H9v-2H7V9h2V7h2v2z" /> 
          </svg>
        </a>
      </div>
      
        </li>
        {phoneModelList.map((val)=>{
            
       return (
        
        <li className="table-row">
          <div className="col col-1" data-label="Job Id">{val.id}</div>
          <div className="col col-2" data-label="Customer Name">{val.PhonesName}</div>
          <div className="col col-3" data-label="Amount">{val.PhonesBrand}</div>
  
         
      <div>
        <a href={"/Phoneslist/"+val.id} className="button icon-button" aria-label="Icon-only Button" style={{backgroundColor : '#42ab69'}}   height="32" viewBox="0 0 32 32" fill="none">
          <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" className="icon-button__icon" focusable="false">
            <path d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 10H16M8 6H12M8 14H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.9541 16.9394L18.9541 15.9394C19.392 15.5015 20.102 15.5015 20.5399 15.9394V15.9394C20.9778 16.3773 20.9778 17.0873 20.5399 17.5252L19.5399 18.5252M17.9541 16.9394L14.963 19.9305C14.8131 20.0804 14.7147 20.2741 14.6821 20.4835L14.4394 22.0399L15.9957 21.7973C16.2052 21.7646 16.3988 21.6662 16.5487 21.5163L19.5399 18.5252M17.9541 16.9394L19.5399 18.5252" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> 
          </svg>
        </a>
      </div>
      
      <div>
        <a onClick={()=>{
          deletePhone(val.id)
        }} className="button icon-button"  aria-label="Icon-only Button" viewBox="0 0 32 32" style={{backgroundColor : 'red'}}>
          <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" className="icon-button__icon"  focusable="false">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
          </svg>
        </a>
      </div>
        </li>
        )
    })}
      </ul>
    </div>
    </div>
          
    );
}

export default PhonesList;