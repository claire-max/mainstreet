import React from 'react'
import  "../index.css"
import exterior from "../assets/exterior.png"

const About = () => {
  return (
    <div>
        <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={exterior} height={600} alt="carwashphoto"/>
                        </div>
                        
                    </div>
                   
                    <br/>
                    <div className="col-lg-6">
                    
                        <div className="section-header text-left">
                        
                            <p>About Us</p>
                          
                        </div>
                        <div className="about-content">
                            <p>
        We are an eco-friendly, solar-powered car wash offering three spacious self-serve bays with a dedicated bay to
         accommodate large Recreational Vehicles. We also offer a powerful, dirt-busting, touch-free automatic wash  
         for your convenience. Our detail vending machine carries many of the items to make your vehicle clean on the inside and out and
         our vacuums will finish the job!
          
                                
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
    </div>
  
  )
}

export default About;
