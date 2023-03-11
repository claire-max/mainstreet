import React from 'react'
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import "../index.css";
// import carwash from "../assets/car-wash.png"
import exterior from "../assets/exterior.png"
import vacuum from "../assets/vacuum.png"
// import car from "../assets/car.png"
import vending from "../assets/vending.png"
import biggbay from "../assets/biggbay.png"
import pricewash from "../assets/pricewashing.png"
import selfservebay from "../assets/self-servebay.png"






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
             
            </div>
          </div>
        </div>
      </div>
    </header>

        <div className="service">
            <div className="container">
                <div className="section-header text-center">
                    <br/>
                    {/* <p>What We Do?</p> */}
                    <h2>Premium Washing Services</h2>
                </div>

         <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={exterior} className='imgcontain' style={{height:550}} alt="exterior"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-header text-left">
                            <p>Exterior Wash</p>
                            <h2>Pamper your vehicle with a fast exterior wash.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<br/>
        <div className="selfservecontain full-bleed">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-header text-left">
                            <p>Self-Serve Bay Washer</p>
                            <h2>We have 2 self-serve bays.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img">
                        <img src={selfservebay} className='imgcontain' style={{height:500}} alt="selfservebay" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
<br/>
<br/>

        <div className="bigbaycontain" >
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6">
                        <div className="about-img">
                        <img src={biggbay} className='imgcontain' alt="bigbay" style={{height:500}}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-header text-left">
                            <p>Truck/RV/Auto Wash Bay</p>
                            <h2>For those large vehicles we have our truck/Rv/Auto wash bays.</h2>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
 <br/>
        <div className="selfservecontain full-bleed">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-header text-left">
                            <p>Self Serve Vacuums</p>
                            <h2>Make your car feel brand new with fresh carpets and seats.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img">
                        <img src={vacuum} className='imgcontain' style={{height:500}} alt="vacuum" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <br/>

      <div className="bigbaycontain" >
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6">
                        <div className="about-img">
                        <img src={vending} className='imgcontain' alt="vending" style={{height:500}}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-header text-left">
                            <p>Vending Detail Center</p>
                            <h2>We are stocked with all of your car washing needs.</h2>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
                {/* <div className="row ">
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item ">
                            <img src={carwash} className="carwash" alt="carwash" width={80} height={80} />
                            <h3>Exterior Washing</h3>
                            <p>Pamper your vehicle with a fast exterior wash.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item">
                            <img src={car} className="carwash" alt="carwash" width={90} height={90}/>
                            <h3>Self Serve Bay Washer</h3>
                            <p>We have 2 self-serve bays.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-md-6">
                        <div className="service-item">
                            <img src={bigbay} className="carwash" alt="bigbay" width={80} height={80}/>
                            <h3>Truck/RV/Auto Wash Bay</h3>
                            <p>For those large vehicles we have our truck/Rv/Auto wash bays.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item">
                            <img src={vacuum} className="carwash" alt="vacuum" width={80} height={80} />
                            <h3>Self Serve Vacuums</h3>
                            <p>Make your car feel brand new with fresh carpets and seats.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="service-item">
                            <img src={vending} className="carwash" alt="vending" width={80} height={80} />
                            <h3>Vending Detail Center</h3>
                            <p>We are stocked with all of your car washing needs.</p>
                        </div>
                    </div>
                  
                  
                </div>  */}
            </div>

           
        </div>
        
        <Footer/>
    </div>
  )
}

export default Services