import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import  "../index.css"
import hero1 from "../assets/hero1.png"
// import header1 from "../assets/first.png"
import hero2 from "../assets/hero2.png"
// import header3 from "../assets/third.png"

const Header = () => {
  return (
    <Carousel fade>
    <Carousel.Item className="firstslide">
      <img
        className="carousel d-block h-100"
        src={hero1}
        alt="First slide"
      />
      <Carousel.Caption className="caption">
        <header className="head">Self-Serve Car Wash</header>
        <h3 className="slidelabel">Wash Your Way</h3>
        <br/>
        <a class="btn btn-custom" href="/services">Explore More</a>
        {/* <p className="imgtext">Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="carousel d-block w-100"
        src={hero2}
        alt="Second slide"
      />

      <Carousel.Caption  className="caption">
      <header className="head">Car wash your way</header>
        <h3 className="slidelabel">Checkout our prices</h3>
        <a class="btn btn-custom" href="/services">Explore Prices</a>
        {/* <p className="imgtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    {/* <Carousel.Item>
      <img
        className="carousel d-block w-100"
        src={header3}
        alt="Third slide"
      />

      <Carousel.Caption className="caption">
      <header className="head">HUOhvfuh;uovfhvojfu'</header>
        <h3 className="slidelabel">Third slide label</h3>
        <p className="imgtext">
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
        


      </Carousel.Caption>
    </Carousel.Item> */}
  </Carousel>
 
);
}


export default Header;
