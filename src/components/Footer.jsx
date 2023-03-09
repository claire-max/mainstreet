import React from 'react'
import logo from "../assets/logo1.png"
import  "../App.css"

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Get In Touch</h2>
                            <p><i className="fa fa-map-marker-alt"></i>409 Main Street, Red Bluff, CA </p>
                            <p><i className="fa fa-phone-alt"></i>530 529-3002</p>
                            <p><i className="fa fa-envelope"></i>wmarkfreeman@gmail.com</p>
                           
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/">About Us</a>
                            <a href="/">Contact Us</a>
                            <a href="/">Our Service</a>
                            <a href="/">Pricing</a>
                        </div>
                     </div>
                   
                    <div className="col-lg-3 col-md-6"> 
                    <div className="logocontain"> 
                       
                       <a href="/">
                               <img className='footerlogo' src={logo} alt="Logo"/> 
                           </a>
                      
                   </div>
                     {/* <div className="form">
       <form>
        <label>Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Write your message here"/>
         <button className="btn">Submit</button> 
        
        </form>  */}
    </div> 
                    
                     </div>
                
               
            </div>
            <div className="container copyright">
                <p>&copy; <a href="#">Main Street Car Wash</a>, All Right Reserved. Designed By <a href="">Claire Freeman</a></p>
            </div>
        </div>
    </div>
    // </div>
  )
}

export default Footer;