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
          <header >
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

            <div className="price">
            <div className="container">
                <div className="section-header sectionselfserve text-center">
                    <h2> Self-Serve Bays</h2>
                    {/* <div className="col-lg-5"> */}
                        <div className="section-header price-header text-center">
                            <h7>$2.50 for 4 minutes, $1.00 for 
                                each additional</h7>
                                <br/>
                                <h7>1 minute and 36 seconds
                                </h7>
                    
                        {/* </div> */}
                       
                    </div> 
                   
                </div>
                <div className="rowselfserve">
                <div className="col-md-4">
                    <div className="price-item washoptions featured-item">
                            <div className="price-header">
                                <h8>Self-Serve Wash Options</h8>
                            </div>
                            <div className="price-body text-white">
                                <ul>
                                    <li><AiFillCheckCircle size={20} color={'#fff'} /> Wax</li>
                                    <li><AiFillCheckCircle size={20} color={'#fff'} />  Rinse</li>
                                    <li><AiFillCheckCircle size={20} color={'#fff'} />  Foam Brush</li>
                                    <li> <AiFillCheckCircle size={20} color={'#fff'} />  Eco Wash Soap</li>
                                    <li> <AiFillCheckCircle size={20} color={'#fff'} />  Pre-Soak</li>
                                    <li> <AiFillCheckCircle size={20} color={'#fff'} />  Tire Cleaner</li>
                                    <li> <AiFillCheckCircle size={20} color={'#fff'} />  Engine Cleaner</li>
                                   
                                </ul>
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
  