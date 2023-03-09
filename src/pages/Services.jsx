import React from 'react'
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import "../index.css";
import carwash from "../assets/car-wash.png"
import vacuum from "../assets/pressure-washer.png"
import car from "../assets/car.png"
import vending from "../assets/vending-machine.png"
import bigbay from "../assets/big-bay.png"
import pricewash from "../assets/pricewashing.png"


const Services = () => {
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
              <h1 className=' priceheading mb-3'>What we do?</h1>
              {/* <h4 className='mb-3'>Subheading</h4> */}
             
            </div>
          </div>
        </div>
      </div>
    </header>
        <div class="service">
            <div class="container">
                <div class="section-header text-center">
                    <br/>
                    {/* <p>What We Do?</p> */}
                    <h2>Premium Washing Services</h2>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="service-item">
                            <img src={carwash} className="carwash" alt="carwash" width={80} height={80} />
                            <h3>Exterior Washing</h3>
                            <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="service-item">
                            <img src={car} className="carwash" alt="carwash" width={100} height={100}/>
                            <h3>Self Serve Bay Washer</h3>
                            <p>h iodsofhvbfonbvsdrng urdoig urdoi g</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="service-item">
                            <img src={bigbay} className="carwash" alt="bigbay" width={80} height={80}/>
                            <h3>Truck/RV/Auto Wash Bay</h3>
                            <p>hfhifbshiofddnbudbu'dfufpfbn'9</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="service-item">
                            <img src={vacuum} className="carwash" alt="vacuum" width={80} height={80} />
                            <h3>Self Serve Vacuums</h3>
                            <p>Make your car feel brand new with fresh carpets and seats.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="service-item">
                            <img src={vending} className="carwash" alt="vending" width={80} height={80} />
                            <h3>Vending Detail Center</h3>
                            <p>Make your car feel brand new with fresh carpets and seats.</p>
                        </div>
                    </div>
                  
                  
                </div>
            </div>

           
        </div>
        
        <Footer/>
    </div>
  )
}

export default Services