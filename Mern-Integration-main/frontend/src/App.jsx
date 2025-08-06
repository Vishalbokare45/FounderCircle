import { BrowserRouter ,  Route, Routes,useLocation } from 'react-router-dom';
import React from 'react'

import Navbar from "./components/Navbar/Navbar";
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register'

import Home from './components/Home/Home';
import Account from './components/Account/Account';
import ProfileForm from './components/Profile/ProfileForm';
import ProfileView from './components/Profile/ProfileView';
import FilterProfile from './components/Profile/FilterProfile';
import Update from './components/Update/Update';
import UpdateView from './components/Update/UpdateView';
import UpdateForMe from './components/Update/UpdateForMe';
import MyUpdate from './components/Update/MyUpdate';
import Network from './components/Network/Network';

import AspServices from './components/AspServices/AspServices';

import WD from './components/ASP/WD'
import AD from './components/ASP/AD'
import CSD from './components/ASP/CSD'
import UIUX from './components/ASP/UIUX'
import DS from './components/ASP/DS'
import CS from './components/ASP/CS'
import SS from './components/ASP/SS'
import MS from './components/ASP/MS'
import MTS from './components/ASP/MTS'
function App() {
  
  return (
    <div className='app'>
    
        <BrowserRouter>
          <LocationWrapper>
   
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />


        <Route path="/home" element={<Home/>} />

        <Route path="/account" element={<Account/>} />
        <Route path="/profileform" element={<ProfileForm/>} />
        <Route path="/profileview/:id" element={<ProfileView/>} />
        <Route path="/completecat/:category" element={<FilterProfile/>} />

        <Route path="/update" element={<Update/>} />
        <Route path="/updateview/:id" exact element={<UpdateView />} />
        <Route path="/updateforme" element={<UpdateForMe/>} />
        <Route path="/myupdate" element={<MyUpdate/>} />


        <Route path="/network" element={<Network/>} />

        <Route path="/aspservices" element={<AspServices/>} />
        <Route path="/wd" element={<WD/>} />
        <Route path="/ad" element={<AD/>} />
        <Route path="/csd" element={<CSD/>} />
        <Route path="/uiux" element={<UIUX/>} />
        <Route path="/ds" element={<DS/>} />
        <Route path="/cs" element={<CS/>} />
        <Route path="/ss" element={<SS/>} />
        <Route path="/ms" element={<MS/>} />
        <Route path="/mts" element={<MTS/>} />
        




        
      </Routes>
      </LocationWrapper>
     </BrowserRouter>
      
    </div>
  )
}


function LocationWrapper({ children }) {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/register'  && <Navbar />}
      {children}
    </>
  );
}

export default App
