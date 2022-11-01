import React, { useState, useEffect } from 'react'
import './phoneList.css';

import Axios from "axios";
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';


function PhoneFormList(){
 

const[phoneForms, setPhoneForms] = useState([])

const [modal, setModal] = useState(false);

const [Id,setId]=useState("")
const [Vorname,setVorname]=useState("")
const [Nachname,setNachname]=useState("")
const [Mailadress,setMailadress] =useState("")
const [Telefon,setTelefon]=useState("")
const [Adress,setAdress]=useState("")
const [Payment,setPayment]=useState("")
const [Info,setInfo]=useState("")
const[priceText, setPriceText]=useState(' ')
const [SelectedPhoneName,setSelectedPhoneName]=useState("")

const deletePhone=(id)=>{
  Axios.delete('https://api.verkauf.tiptopmobile.de/api/delete/'+id)
}

 useEffect(()=>{

  async function fetchMyAPI() {

    await Axios.get("https://api.verkauf.tiptopmobile.de/api/form").then((response)  =>{
  
      setPhoneForms(response.data);

   
   })
  }

fetchMyAPI()

},[1])

const DialogBox= (id,vorname,nachname,mailAdress,telefon,adress,payment,selectedphonename,priceText,info)=>{
  setModal(true)
  setId(id)
  setVorname(vorname)
  setNachname(nachname)
  setMailadress(mailAdress)
  setTelefon(telefon)
  setAdress(adress)
  setPayment(payment)
  setSelectedPhoneName(selectedphonename)
  setPriceText(priceText)
  setInfo(info)
}




    return(
      
       <div>
      
      
      <div className="containerplist">
        
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Form Id</div>
          <div className="col col-2">Nachname Vorname</div>
          <div className="col col-3">Mail</div>
           
          <div><br></br> </div> 
          <div><br></br> </div>
          <div>
         
      </div>
      
      <PureModal width='800px'  
  header={Id}

  isOpen={modal}
  closeButton="X"
  closeButtonPosition="bottom"
  onClose={() => {
    setModal(false);
    return true;
  }}
>
  <h3 className='h2Dialog'>{Nachname+" "+Vorname}</h3>
  <br></br>
  <h3 className='h2Dialog'>{Mailadress}</h3><br></br>
  <h3 className='h2Dialog'>{Adress}</h3><br></br>
  <h3 className='h2Dialog'>Payment: {Payment}</h3><br></br>
  <h3 className='h2Dialog'>PhoneNumber: {Telefon}</h3><br></br>
  <h3 className='h2Dialog'>{SelectedPhoneName}</h3><br></br>
  <h3 className='h2Dialog'>{priceText}</h3><br></br>
  <h3 className='h2Dialog'>Info: {Info}</h3><br></br>
</PureModal>
        </li>
        {phoneForms.map((val)=>{
            
       return (
        
        <li className="table-row">
          <div className="col col-1" data-label="Job Id">{val.idphone_form}</div>
          <div className="col col-2" data-label="Customer Name">{val.nachName+ " "+val.vorName}</div>
          <div className="col col-3" data-label="Amount">{val.mailAdress}</div>
  
         
      <div>
    
        <a onClick={() => DialogBox(val.idphone_form,val.vorName,val.nachName,val.mailAdress,val.telefon,val.strasse+" "+val.houseNumber+" "+val.stadt+val.postCode,val.payment,val.phoneName,val.phonePrice,val.info)} className="button icon-button" aria-label="Icon-only Button" style={{backgroundColor : '#42ab69'}}   height="32" viewBox="0 0 32 32" fill="none">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-info" viewBox="0 0 16 16"> <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> </svg>
        </a>
      </div>
      
      <div>
     
      </div>
        </li>
        )
    })}
      </ul>
    </div>
    </div>
          
    );
}

export default PhoneFormList;