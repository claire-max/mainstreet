import React from 'react'
// import { Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
// import first from '../assets/first.png';
import pricewash from "../assets/pricewashing.png"
import "../index.css";

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
              {/* <h4 className='mb-3'>Subheading</h4> */}
             
            </div>
          </div>
        </div>
      </div>
    </header>
          
          
        <div class="price">
            <div class="container">
                <div class="section-header text-center">
                    {/* <p>Choose Your Wash</p> */}
                    <h2> Touch-Free Automatic Car Wash</h2>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="price-item">
                            <div class="price-header">
                                <h3>Deluxe</h3>
                                <h2><span>$</span><strong>7</strong></h2>
                            </div>
                            <div class="price-body">
                                <ul>
                                    <li><i class="far fa-check-circle"></i>Double Pass Presoak</li>
                                    <li><i class="far fa-check-circle"></i>High Pressure Wash</li>
                                    <li><i class="far fa-check-circle"></i>Clear Coat Protectant</li>
                                    <li><i class="far fa-check-circle"></i>Spot Free Rinse</li>
                                    <li><i class="far fa-check-circle"></i>Power Dry</li>
                                </ul>
                            </div>
                            {/* <div class="price-footer">
                                <a class="btn btn-custom" href="">Book Now</a>
                            </div> */}
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="price-item featured-item">
                            <div class="price-header">
                                <h3>Premium</h3>
                                <h2><span>$</span><strong>9</strong></h2>
                            </div>
                            <div class="price-body">
                                <ul>
                                    <li><i class="far fa-check-circle"></i>Wheel Cleaner</li>
                                    <li><i class="far fa-check-circle"></i>Rocker Panel Blaster</li>
                                    <li><i class="far fa-check-circle"></i>Double Pass</li>
                                    <li><i class="far fa-check-circle"></i>Heated Presoak</li>
                                    <li><i class="far fa-check-circle"></i>High Pressure Wash</li>
                                    <li><i class="far fa-check-circle"></i>Triple Foam Polish</li>
                                    <li><i class="far fa-check-circle"></i>Clear Coat Protectant</li>
                                    <li><i class="far fa-check-circle"></i>Spot Free Rinse</li>
                                    <li><i class="far fa-check-circle"></i>Power Dry</li>
                                </ul>
                            </div>
                            {/* <div class="price-footer">
                                <a class="btn btn-custom" href="">Book Now</a>
                            </div> */}
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="price-item">
                            <div class="price-header">
                                <h3>Ultimate</h3>
                                <h2><span>$</span><strong>11</strong></h2>
                            </div>
                            <div class="price-body">
                                <ul>
                                    <li><i class="far fa-check-circle"></i>Wheel Cleaner</li>
                                    <li><i class="far fa-check-circle"></i>Rocker Panel Blaster</li>
                                    <li><i class="far fa-check-circle"></i>Double Pass</li>
                                    <li><i class="far fa-check-circle"></i>Heated Presoak</li>
                                    <li><i class="far fa-check-circle"></i>High Pressure Wash</li>
                                    <li><i class="far fa-check-circle"></i>Triple Foam Polish</li>
                                    <li><i class="far fa-check-circle"></i>Clear Coat Protectant</li>
                                    <li><i class="far fa-check-circle"></i>Spot Free Rinse</li>
                                    <li><i class="far fa-check-circle"></i>Power Dry</li>
                                    <li><i class="far fa-check-circle"></i>Body Armor Protection</li>
                                </ul>
                            </div>
                            {/* <div class="price-footer">
                                <a class="btn btn-custom" href="">Book Now</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
            <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button bsStyle="primary">Learn more</Button>
  </p>
</Jumbotron>;
            </div> */}
        </div>


<Footer/>
    </div>
  )
}

export default Prices