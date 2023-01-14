import React from 'react'
import "./home.css"
import { Link } from "react-router-dom";
const landingpage = () => {
  return (
    <div>
        <section>
          
            <header>
                <h2> <a href='#' className="logo">SVNIT</a></h2>
                
                <div className="navigation">
                    <a href='#'>Placed</a>
                    <a href='#'>Unplaced</a>
                    <a href='#'>Statistics</a>
                    {/* <a href='#'>Services</a> */}
                    <a href='#'>U20CS135</a>
                </div>
            </header>
             <div className="content">
                
            </div>
            {/* <footer>
            <div className="media-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div> 
            </footer> */}
        </section>
    </div>
  )
}

export default landingpage