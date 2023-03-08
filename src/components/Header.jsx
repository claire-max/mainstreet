import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import  "../index.css"

import header1 from "../assets/first.png"
import header2 from "../assets/second.png"
import header3 from "../assets/third.png"

const Header = () => {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img
        className="carousel d-block w-100"
        src={header1}
        alt="First slide"
      />
      <Carousel.Caption  className="caption">
        <header className="head">HUOhvfuh;uovfhvojfu'</header>
        <h3 className="slidelabel">First slide label</h3>
        <p className="imgtext">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="carousel d-block w-100"
        src={header2}
        alt="Second slide"
      />

      <Carousel.Caption  className="caption">
      <header className="head">HUOhvfuh;uovfhvojfu'</header>
        <h3 className="slidelabel">Second slide label</h3>
        <p className="imgtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
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
    </Carousel.Item>
  </Carousel>
 
);
}


export default Header;
