import React,{ useState, useEffect } from 'react'
import './pdetail.css';
import dhllogo from "../assets/dhl_Logo.png";
import paypal from "../assets/PayPal.png";
import banktrans from "../assets/banktrans.png";
import { useParams } from "react-router-dom";
import Axios from "axios";

import ReCAPTCHA from "react-google-recaptcha";
import {  useNavigate} from "react-router-dom";
import { set } from 'mobx';

const PDetailpage = () => {

  const navigate = useNavigate();
  const [show,setShow]=useState(true)


 const  [imgshow,setimgShow]=useState(paypal)    
 const { phoneId } = useParams();
 const [Vorname,setVorname]=useState("")
 const [Nachname,setNachname]=useState("")
 const [Mailadress,setMailadress] =useState("")
 const [Telefon,setTelefon]=useState("")
 const [Strasse,setStrasse]=useState("")
 const [Haousenumber,setHaousenumber]=useState("")
 const [Stadt,setStadt]=useState("")
 const [PostCode,setPostCode]=useState("")
 const [Payment,setPayment]=useState("")
 const [Info,setInfo]=useState("")




 const submitReview=  (e)=>{
  

  e.preventDefault();
  try{
     Axios.post("http://161.35.64.20:3001/api/get/insert",{
      vorname : Vorname,
      nachname : Nachname,
      mailadress : Mailadress,
      telefon : Telefon,
      strasse: Strasse,
      housenumber : Haousenumber,
      stadt : Stadt,
      postCode : PostCode,
      payment : Payment,
      info:Info,
      phoneName: SelectedPhoneName,
      PhonePrice: priceText
    })
    navigate("/success");
     
   
  }catch(err){

    console.log(err);
  }
  

 };


  
function CheckerPayment(e){
  if (e==="PayPal Account *")
  {setimgShow(paypal) }
  else{
    setimgShow(banktrans)
  }
}
  
  const [selected, setSelected] = useState("Paypal Account *");
  
const[priceText, setPriceText]=useState(' ')
const [SelectedPhoneName,setSelectedPhoneName]=useState("")
  const[phoneModelList, setPhoneBrandList] = useState([])
  useEffect(()=>{

    async function get (){
      await  Axios.get("http://161.35.64.20:3001/api/detail/"+phoneId).then((response)=>{
  
        setPhoneBrandList(response.data)
        
        setSelectedPhoneName(response.data[0]?.PhonesName)
        setPriceText(response.data[0]?.PhonePrice_1 + "€ Hervorragendn")

   console.log(response.data[0]?.PhonePrice_1)
     })
  
    }

   get()

  },[1])


  return(
  
    <div>  { show ? 
      <div>
      <h1> </h1>
      
    <main className="container">
    
    <div className="left-column">
    
    <img src={`http://161.35.64.20:3001/phoneImg/${phoneId}.png`} alt='phonepic'/>
    
    </div>
    
    <div className="right-column">
    
    <div className="product-description">
    <span>{phoneModelList[0]?.PhonesBrand}</span>
    <h1>{phoneModelList[0]?.PhonesName}</h1>
    <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance
      
    </p>
    </div>
    
    <div className="product-configuration">
    
    
    
    <div className="cable-config">
     <span>Zustandsbeschreibung</span>
    <br></br>
    <br></br>
     <div className="cable-choose">
       <button id="1" value="1"  onClick={()=>setPriceText(phoneModelList[0]?.PhonePrice_1 +"€ Hervorragend" )}  required>Hervorragend</button>
       <button id="2" value="2" onClick={()=>setPriceText(phoneModelList[0]?.PhonePrice_2 +"€ Gut")}  >Gut</button>
       <button id="3" value="3"  onClick={()=>setPriceText(phoneModelList[0]?.PhonePrice_3 +"€ Genutzt")}  >Genutzt</button>
       <button id="4" value="4"  onClick={()=>setPriceText(phoneModelList[0]?.PhonePrice_4 +"€ in Ordnung")} >in Ordnung</button>
     </div>
    
     <a href="#">Den Status meines Telefons kategorisieren</a>
    </div>
    </div>
    
    <div className="product-price">
    <span>{priceText}</span>
    <a onClick={()=>setShow(!show)} className="cart-btn">Bestätigen</a>

  
    </div>
    </div>
    </main>
    
  
      <div className="row">
          <div className="col">
            <h2>Häufig gestellte Fragen <b>Fragen </b></h2>
            <div className="tabs">
              <div className="tab">
                <input type="checkbox" id="chck1" className="inputTab" />
                <label className="tab-label" htmlFor="chck1">Kann das vorläufige Preisangebot vom endgültigen Preisangebot abweichen? Wieso den?</label>
                <div className="tab-content">
                Ja vielleicht. Wir testen Ihr Gerät ausführlich vom Lautsprecher bis zum Bildschirm, von der Speicherkarte bis zum Ladeanschluss. 
                Während dieses Tests können wir einige Fehlfunktionen feststellen, die Ihnen nicht bekannt sind. In diesem Fall kann das endgültige Preisangebot abweichen.
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck2" className="inputTab"/>
                <label className="tab-label" htmlFor="chck2">Wann erhalte ich die Zahlung? </label>
                <div className="tab-content">
                Nachdem wir Ihr Gerät überprüft haben, senden wir Ihnen eine SMS mit unserem endgültigen Angebot. 
                Wenn Sie dies genehmigen, überweisen wir Ihr Geld innerhalb von 1 Tag auf Ihr Konto.
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck3" className="inputTab"/>
                <label className="tab-label" htmlFor="chck3">Was passiert, wenn ich den Endpreis nicht bestätige? </label>
                <div className="tab-content">
                Wir senden Ihr Gerät per Kurier an Sie zurück.
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck4" className="inputTab"/>
                <label className="tab-label" htmlFor="chck4">Wie schicke ich mein Handy zu dir? </label>
                <div className="tab-content">
                Sie können Ihr Etikett ausdrucken und über die DHL-Seite zur Etikettenerstellung an uns senden. oder Sie überlassen es unseren Filialen.
                </div>
              </div>
            </div>
          </div>
         
        </div>

      </div>:
    <div>
    <div className="form-style-5">

      <form action="" method="post" onSubmit={submitReview} >
        <fieldset>
          <legend><span className="number">1</span> PERSÖNLICHE DATEN
          </legend>
          <input type="text" name='Vorname'  placeholder="Nachname *" onChange={(e) => {setNachname(e.target.value)} } />
          <input type="text" name='Nachname' placeholder="Vorname *"  onChange={(e) => setVorname(e.target.value) } />
          <input type="email" name='Mailadress'  placeholder="Your Email *" onChange={(e) => setMailadress(e.target.value) } />
          <input type="text"  name='Telefon' placeholder="Telefon *" onChange={(e) => setTelefon(e.target.value) } />
          <legend><span className="number">2</span> ADRESSE
        </legend>
          <input type="text"  name='Strasse' placeholder="Strasse *" onChange={(e) => setStrasse(e.target.value) } />
          <input type="text"  name='Haousenumber' placeholder="Hausnummer *" onChange={(e) => setHaousenumber(e.target.value) } />
          <input type="text"  name='Stadt' placeholder="Stadt *" onChange={(e) => setStadt(e.target.value) }/>
          <input type="text"  name='PostCode' placeholder="Postleitzahl *" onChange={(e) => setPostCode(e.target.value) }  />

          <legend><span className="number">3</span> Additional Info</legend>
          <br />
          <img src={dhllogo} width="200"  alt='dhllogo'/>
          <label htmlFor="job">Im Anschluss Kannst Du Deınen DHL Versandscheın Erstellen. - 0,00€</label>
          <br />
          <label htmlFor="job">WIe Möchtest Du Ausbezahlt Werden?:</label>
          


          <select id="Payment" onChange={ (e) => {setSelected(e.target.value || null);
          CheckerPayment(e.target.value );}}>
            <optgroup label="Payment" >
              <option label="Paypal" value="PayPal Account *"  selected> </option>
              <option label="Auszahlung per Überweisung" value="IBAN Number *"></option>
            </optgroup>
          </select>     

         
          <label htmlFor="job">{selected}:</label>
       <img src = {imgshow} width="200" alt='dhl logo' ></img>
       <input type="text" name='Payment' placeholder={selected}  onChange={(e) => setPayment(e.target.value) } />


        </fieldset>
        <fieldset>
          <legend><span className="number">4</span> Zusätzliche Information</legend>
          <textarea name='Info' placeholder="Wenn Sie uns etwas mitteilen möchten, schreiben Sie es hier. (Optional) " onChange={(e) => setInfo(e.target.value) }  />
        </fieldset>
        <ReCAPTCHA
    sitekey="6LfmZaAhAAAAAOB6N7JvQTJg6zilAcgtdHnpazNb"
 
  />
 <br></br>

 <button type = "submit" onSubmit={submitReview} > Bestätigen</button>
    
        
 
      </form>
      
    </div>
</div>}</div>
    
  )





}

export default PDetailpage