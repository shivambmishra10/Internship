import React from 'react'
import "./Landingpage.css"
import { Link } from "react-router-dom";
const landingpage = () => {
  return (
    <div>
        <section>
          
            <header>
                <h2> <a href='#' className="logo">SVNIT</a></h2>
                
                <div className="navigation">
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Info</a>
                    <a href='#'>Services</a>
                    <a href='#'>Contact</a>
                </div>
            </header>
             <div className="content">
                <div className="info">
                    <h2>Internship Tracker</h2>
                    <p>National Institute of Technology Surat (SVNIT or NIT Surat), is a public technical university established by the Parliament of India in 1961. It is one of 31 National Institutes of Technology in India</p>
                    {/* <a href='#' className="info-btn">Register</a> */}
                    <Link to="/registration" className='info-btn'>Register</Link>
                    
                    <Link to="/admin" className='info-btn1'>Admin Entry</Link>
                    
                </div>
            </div>
            <footer>
            <div className="media-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div> 
            </footer>
        </section>
    </div>
  )
}

export default landingpage