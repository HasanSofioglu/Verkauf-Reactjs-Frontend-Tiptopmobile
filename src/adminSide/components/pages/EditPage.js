import React,{ Fragment, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Axios from "axios";
import './editPage.css';

import Message from './Message';
import Progress from './Progress';


const EditPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { phoneId } = useParams();
  const[phoneModelList, setPhoneList] = useState([])
    useEffect(()=>{
        Axios.get("https://api.verkauf.tiptopmobile.de/api/detail/"+phoneId).then((response)=>{
    
           setPhoneList(response.data);
          setPhoneName(response.data[0].PhonesName)
          setPhoneBrand(response.data[0].PhonesBrand)
          setPhonePrice_1(response.data[0].PhonePrice_1)
          setPhonePrice_2(response.data[0].PhonePrice_2)
          setPhonePrice_3(response.data[0].PhonePrice_3)
          setPhonePrice_4(response.data[0].PhonePrice_4)
         
        })
       
    },[1])
     
    

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const [PhoneName, setPhoneName] = useState({});
    const [PhoneBrand, setPhoneBrand] = useState('');
    const [PhonePrice_1, setPhonePrice_1] = useState('');
    const [PhonePrice_2, setPhonePrice_2] = useState('');
    const [PhonePrice_3, setPhonePrice_3] = useState('');
    const [PhonePrice_4, setPhonePrice_4] = useState('');



    const onChange = e => {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
      setSelectedImage(URL.createObjectURL(e.target.files[0]))
    };
  
    const onSubmit = async e => {

  
      if(selectedImage!==null){try{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        const res = await Axios.post('https://api.verkauf.tiptopmobile.de/upload/'+phoneId, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: progressEvent => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );
          }
        });
        
        // Clear percentage
        setTimeout(() => setUploadPercentage(0), 10000);
  
        const { fileName, filePath } = res.data;
  
        setUploadedFile({ fileName, filePath });
  
        setMessage('File Uploaded');
      }catch(err){
        if (err.response.status === 500) {
          setMessage('There was a problem with the server');
        } else {
          setMessage(err.response.data.msg);
        }
        setUploadPercentage(0)
      }}

      try {
          Axios.post("https://api.verkauf.tiptopmobile.de/api/update/"+phoneId,{
          phoneName : PhoneName,
          phoneBrand : PhoneBrand,
          phonePrice_1 : PhonePrice_1,
          phonePrice_2 : PhonePrice_2,
          phonePrice_3: PhonePrice_3,
          phonePrice_4 : PhonePrice_4,
         
        })


       
      } catch (err) {
      
      }
    };
  
return(
  <div>
   
    {phoneModelList.map((val)=>{
           
      return ( <div>
     

        <div className="form-style-5">
  
   
          <form onSubmit={onSubmit}>
            <fieldset>

              <legend><span className="number">1</span> Phone id: {val.id} pic: </legend>

              <img width={"200px"} src={`https://api.verkauf.tiptopmobile.de/phoneImg/${val.id+".png"}`} alt='phonepic'/>
              <div>
 
              <Fragment>
      {message ? <Message msg={message} /> : null}

        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

  
     
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '200px' }} src={selectedImage} alt='' />
          </div>
        </div>
      ) : null}
    </Fragment>
      <br />
     
      <br /> 
      
    </div>
             
              <input type="text" name="field1"  placeholder={val.PhonesName} onChange={(e) => setPhoneName(e.target.value) }  ></input>
              <label htmlFor="job">Brand:</label>
              <select id="job" name="field4" onChange={(e) => setPhoneBrand(e.target.value) }>
                
                <optgroup label="Brand"  >
                  <option value="Apple">Apple</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Xiaomi">Xiaomi</option>
                  <option value="Google">Google</option>
                  <option value="Honor">Honor</option>
                  
                </optgroup >

              </select> 
             
              <label htmlFor="job">Hervorragend Price:</label>
              <input type="number" name="price1" placeholder={val.PhonePrice_1} onChange={(e) => setPhonePrice_1(e.target.value) }  />
              <label htmlFor="job">Gut Price:</label>
              <input type="number" name="price2" placeholder={val.PhonePrice_2} onChange={(e) => setPhonePrice_2(e.target.value) } />
              <label htmlFor="job">Genutz Price:</label>
              <input type="number" name="price3" placeholder={val.PhonePrice_3} onChange={(e) => setPhonePrice_3(e.target.value) } />
              <label htmlFor="job">In Ordung Price:</label>
              <input type="number" name="price4" placeholder={val.PhonePrice_4} onChange={(e) => setPhonePrice_4(e.target.value) } />
            </fieldset>
 
            
          <button type = "submit" onSubmit={""} > Update</button>
          </form>
        </div>
    </div>)})}
    </div>
    )
 
}

export default EditPage