import React from 'react'
import Menu from '../components/Menu';
import pricewash from "../assets/pricewashing.png"
import {AiFillCheckCircle} from "react-icons/ai"
import "../index.css";
import  "../App.css"
import Footer from '../components/Footer';






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
                <div className="section-header sectionselfserve text-center">
                    <h2> Touch-Free Automatic Car Wash</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="price-item premium1 featured-item">
                            <div className="price-header">
                                <h3>Deluxe</h3>
                                <h2><span>$</span><strong>7</strong></h2>
                            </div>
                            <div className="price-body text-white ">
                                <ul>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Double Pass Presoak</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> High Pressure Wash</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Clear Coat Protectant</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Spot Free Rinse</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Power Dry</li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="price-item premium2 featured-item">
                            <div className="price-header">
                                <h3>Premium</h3>
                                <h2><span>$</span><strong>9</strong></h2>
                            </div>
                            <div className="price-body text-white">
                                <ul>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'} /> Wheel Cleaner</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Rocker Panel Blaster</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Double Pass</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Heated Presoak</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> High Pressure Wash</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Triple Foam Polish</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Clear Coat Protectant</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Spot Free Rinse</li>
                                    <li><AiFillCheckCircle size={20} color={'#E81C2E'}/> Power Dry</li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                   
                    <div className="col-md-4">
                    <div className="price-item premium featured-item ">
                            <div className="price-header">
                                <h3>Ultimate</h3>
                                <h2><span>$</span><strong>11</strong></h2>
                            </div>
                            <div className="price-body text-white">
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

            </div>
 
            <div className="container">
                <div className="section-header text-center">
                    <h2>Self-Serve Bays</h2>

                  
                </div> 



                <div className="location">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="section-header priceheader text-left">
                            <h7>$2.50 for 4 minutes, $1.00 for 
                                each additional 1 minute and 36 seconds
          </h7>
                        </div>
                       
                    </div>

                    
                    <div className="col-lg-5">
                        <div className="location-form">
                            <h3 className=''>Self-Serve Washing Options</h3>
    <form>
                            <div className="location">
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 ">
                       
                        <div className="row">
                            <div className="col-md-6">
                                <div className="location-item">
                                <AiFillCheckCircle size={20} color={'#fff'} /> 
                                    <div className="location-text">
                                        <h3>Wax</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="location-item">
                                <AiFillCheckCircle size={20} color={'#fff'} /> 
                                    <div className="location-text">
                                        <h3>Rinse</h3>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="location-item">
                                <AiFillCheckCircle size={20} color={'#fff'} /> 
                                    <div className="location-text">
                                        <h3>Foam Brush</h3>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="location-item">
                                <AiFillCheckCircle size={20} color={'#fff'} /> 
                                    <div className="location-text">
                                        <h3>Wash Soap</h3>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="location-item">
                                <AiFillCheckCircle size={20} color={'#fff'} /> 
                                    <div className="location-text">
                                        <h3>Pre-Soak</h3>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="location-item">
                                <AiFillCheckCircle size={20} color={'#fff'} /> 
                                    <div className="location-text">
                                        <h3>Tire Cleaner</h3>
                                      
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="location-item">
                                <AiFillCheckCircle size={20} color={'#fff'} /> 
                                    <div className="location-text">
                                        <h3>Engine Cleaner</h3>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                               
         </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </div>
    
        
       
            <Footer/> 
   
    </div>
   
  )
}

export default Prices