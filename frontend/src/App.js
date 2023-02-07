import React, { useState } from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage"
import Registration from "./components/Registration/User/Auth"
import Admin from "./components/Registration/Admin/Admin"
import Home from "./components/home/home"
import isAuth from "./services/isAuth";
import { Link, Navigate, useNavigate } from 'react-router-dom';
// const navigate=useNavigate();
function App() {

  return (
    // const navigate=useNavigate();
      <Router>
   
         <Routes>
        
        <Route path="/" element={<Landingpage />} />
        <Route path="/registration" element={<Registration />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/home" element={isAuth() ? <Home />:<Registration />}/>
        </Routes>
      </Router> 
      
    
  );
}

export default App;
