import React, { useState } from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage"
import Registration from "./components/Registration/User/Auth"
import Admin from "./components/Registration/Admin/Admin"
import Home from "./components/home/home"
function App() {
  
  return (
      
      <Router>
   
         <Routes>
        
        <Route path="/" element={<Landingpage />} />
        <Route path="/registration" element={<Registration />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/home" element={<Home />}/>
        </Routes>
      </Router> 
      
    
  );
}

export default App;
