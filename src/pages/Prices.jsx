import React from 'react'
import Menu from '../components/Menu';
import pricewash from "../assets/pricewashing.png"
import {AiOutlineCheckCircle, AiFillCheckCircle} from "react-icons/ai"
import "../index.css";
import logo from "../assets/logo1.png"
import  "../App.css"
import {HiLocationMarker} from "react-icons/hi"
import {AiFillPhone} from 'react-icons/ai'
import {BsFillEnvelopeFill} from 'react-icons/bs'

const Prices = () => {
  return (
    <div>
          <Menu/>
          <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image d-flex justify-content-center align-items-center '
        style={{ backgroundImage: `url(${pricewash})`, height: 400, backgroundPosition: 'center',
        backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
                <br/>
                <br/>
                <br/>
              <h1 className=' priceheading mb-3'>Choose your Wash</h1>
             
            </div>
          </div>
        </div>
      </div>
    </header>
          
          
        <div className="price">
            <div className="container">
                <div className="section-header text-center">
                    <h2> Touch-Free Automatic Car Wash</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="price-item">
                            <div className="price-header">
                                <h3>Deluxe</h3>
                                <h2><span>$</span><strong>7</strong></h2>
                            </div>
                            <div class="price-body">
                                <ul>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'} /> Double Pass Presoak</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> High Pressure Wash</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Clear Coat Protectant</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Spot Free Rinse</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Power Dry</li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="price-item premium featured-item">
                            <div className="price-header">
                                <h3>Premium</h3>
                                <h2><span>$</span><strong>9</strong></h2>
                            </div>
                            <div className="price-body text-white">
                                <ul>
                                    <li><AiOutlineCheckCircle size={20} color={'#E81C2E'} /> Wheel Cleaner</li>
                                    <li><AiOutlineCheckCircle size={20} color={'#E81C2E'}/> Rocker Panel Blaster</li>
                                    <li><AiOutlineCheckCircle size={20} color={'#E81C2E'}/> Double Pass</li>
                                    <li><AiOutlineCheckCircle size={20} color={'#E81C2E'}/> Heated Presoak</li>
                                    <li><AiOutlineCheckCircle size={20} color={'#E81C2E'}/> High Pressure Wash</li>
                                    <li><AiOutlineCheckCircle size={20} color={'#E81C2E'}/> Triple Foam Polish</li>
                                    <li><AiOutlineCheckCircle size={20} color={'#E81C2E'}/> Clear Coat Protectant</li>
                                    <li><AiOutlineCheckCircle size={20} color={'#E81C2E'}/> Spot Free Rinse</li>
                                    <li><AiOutlineCheckCircle size={20} color={'#E81C2E'}/> Power Dry</li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="price-item">
                            <div className="price-header">
                                <h3>Ultimate</h3>
                                <h2><span>$</span><strong>11</strong></h2>
                            </div>
                            <div className="price-body">
                                <ul>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'} /> Wheel Cleaner</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Rocker Panel Blaster</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Double Pass</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Heated Presoak</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> High Pressure Wash</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'} /> Triple Foam Polish</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Clear Coat Protectant</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Spot Free Rinse</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Power Dry</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Body Armor Protection</li>                 
                                </ul>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>

        
        <div>

<div className="footer" style={{backgroundColor:'#202C45'}}>
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
    
    </div>
    </div>
  )
}

export default Prices