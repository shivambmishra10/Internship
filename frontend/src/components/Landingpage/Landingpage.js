import React from 'react'
import "./Landingpage.css"
const landingpage = () => {
  return (
    <div>
        <section>
          
            <header>
                <h2> <a href='#' class="logo">SVNIT</a></h2>
                
                <div class="navigation">
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Info</a>
                    <a href='#'>Services</a>
                    <a href='#'>Contact</a>
                </div>
            </header>
             <div class="content">
                <div class="info">
                    <h2>Internship <span>Tracker</span></h2>
                    <p>National Institute of Technology Surat (SVNIT or NIT Surat), is a public technical university established by the Parliament of India in 1961. It is one of 31 National Institutes of Technology in India</p>
                    <a href='#' class="info-btn">Register</a>
                </div>
            </div>
            <footer>
            <div class="media-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div> 
            </footer>
        </section>
    </div>
  )
}

export default landingpage