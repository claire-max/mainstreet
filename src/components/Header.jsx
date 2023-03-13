import React from 'react';
import  "../index.css"
import hero1 from "../assets/hero1.png"


const Header = () => {
  return (
    <header style={{ paddingLeft: 0 }}>
    <div
      className='p-5  homeimg text-center bg-image d-flex justify-content-center align-items-center '
      style={{ backgroundImage: `url(${hero1})`, height: 700, backgroundPosition: 'center',
      backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      <div className='mask'>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='text-white'>
              <br/>
              <h3 className="slidelabel">Wash Your Way</h3>
             
        <a class="btn btn-custom" href="/services">Explore More</a>
           
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}



export default Header;
