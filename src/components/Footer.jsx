import React from 'react'
import logo from "../assets/logo1.png"
import  "../App.css"
import {HiLocationMarker} from "react-icons/hi"
import {AiFillPhone} from 'react-icons/ai'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import  "../index.css"

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Get In Touch</h2>
                            <p><HiLocationMarker size={25}/> 409 Main Street, Red Bluff, CA </p>
                            <p><AiFillPhone size={25}/> 530 529-3002</p>
                            <p><BsFillEnvelopeFill  size={23}/> wmarkfreeman@gmail.com</p>
                           
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/">About Us</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/services">Our Service</a>
                            <a href="/prices">Pricing</a>
                        </div>
                     </div>
                   
                    <div className="col-lg-3 col-md-6"> 
                    <div className="logocontain"> 
                       
                       <a href="/">
                               <img className='footerlogo' src={logo} alt="Logo"/> 
                           </a>
                      
                   </div>
                    
    </div> 
                    
                     </div>
                
               
            </div>
            <div className="container copyright">
                <p>&copy; <a href="/">Main Street Car Wash</a> All Right Reserved</p>
            </div>
        </div>
    </div>
    
  )
}

export default Footer;