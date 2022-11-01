import React,{ useState,  useEffect } from 'react'
import { Header } from './components/Header';
import { Route, Routes } from "react-router-dom";
import Contactform from './components/Contactform';
import Firststartpage from './components/Firststartpage';
import Phonemodelspage from './components/Phonemodelspage';
import Phones from './components/Phones';
import PDetailpage from './components/PDetailpage';
import Successpage from './components/Successpage';
import Axios from "axios";
import PhonesList from './adminSide/components/pages/PhonesList';
import Products from './adminSide/components/pages/Products';
import Home from './adminSide/components/pages/PhoneFormList';
import Navbar from './adminSide/components/Navbar';
import Registration from "./adminSide/Registration";
import EditPage from './adminSide/components/pages/EditPage';
import AddPage from './adminSide/components/pages/AddPage';

import PhoneFormList from './adminSide/components/pages/PhoneFormList';
import Footer from './components/Footer';

export const App = () => {

  const [role, setRole] = useState(false);

  Axios.defaults.withCredentials = true;
  useEffect(()  => {

    async function rolecontroller(){ 
      await Axios.get("https://api.verkauf.tiptopmobile.de/logincheck").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(true);
        console.log(role)
      }
    });}
  rolecontroller()
  }, [1]);


  return (
  <div>
    {!role&&(
          <>
           <Header></Header>
        
          </>
        )}
      {role&&(
          <>
           <Navbar></Navbar>
        
          </>
        )}
          
          <Routes>
      
     <Route path="/" element={<Firststartpage/>} />
          <Route path="/contact" element={<Contactform />} />
          <Route path="/models" element={<Phonemodelspage />} />
          <Route path={"/phones/:phoneBrand"} element={<Phones/>}/>
          <Route path={"/detail/:phoneId"} element={<PDetailpage/>}/>
          <Route path={"/success"} element={<Successpage/>}/>
          <Route path="/admin" element={<Registration/>}/>
      
      
        {role?<>
     
        
          <Route path="/Phoneslist" element={<PhonesList/>}/>
        <Route path="/Phoneslist/Add" element={<AddPage/>}/>
        <Route path="/Phoneslist/:phoneId" element={<EditPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/FormList" element={<PhoneFormList/>}/>
        </>:<></>}
     
        </Routes>
        <Footer></Footer>
      
    </div>
  )
}

export default App;