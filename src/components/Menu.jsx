
import '../index.css'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo1.png"

const Menu = () => {
  return (
    <div>
        <div className="top-bar" >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="logo">
                            <a href="/">
                                <img src={logo} alt="Logo" height={100} width={100}/> 
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7 d-none d-lg-block">
                        <div className="row">
                            <div className="col-4">
                                <div className="top-bar-item">
                                    <div className="top-bar-icon">
                                        <i className="far fa-clock"></i>
                                    </div>
                                    <div className="top-bar-text">
                                        <h3>Opening Hours</h3>
                                        <p>Mon - Sun, 24 hours</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="top-bar-item">
                                    <div className="top-bar-icon">
                                        <i className="fa fa-phone-alt"></i>
                                    </div>
                                    <div className="top-bar-text">
                                        <h3>Call Us</h3>
                                        <p>530 529-3002</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="top-bar-item">
                                    <div className="top-bar-icon">
                                        <i className="far fa-envelope"></i>
                                    </div>
                                    <div className="top-bar-text">
                                        <h3>Email Us</h3>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <Navbar className='con' sticky="top">
        <Container className="contain" sticky="top" >
          <Nav className="me-auto">
          <a href="/" className="nav-item1 nav-link text-white">About</a>
          <a href="/services" className="nav-item2 nav-link text-white">Service</a>
          <a href="/prices" className="nav-item3 nav-link text-white">Price</a>
          <a href="/contact" className="nav-item nav-link text-white">Contact</a>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <div className="call">
         {/* <a className="btn btn-custom" href="#">Call Now</a> */}
         {/* <a href="tel:916-934-9148" className="btn btn-custom" alt="Call 916-934-9148">Call Now</a> */}
         <a href="tel:916-934-9148" className="btn btn-custom" > Call Now </a>
                    
                </div>
        </Container>
      </Navbar>
     
      {/* <a href="" className="nav-item nav-link">About</a>
                        <a href="" className="nav-item nav-link">Service</a>
                        <a href="" className="nav-item nav-link">Price</a>
                        <a href="/contact" className="nav-item nav-link">Contact</a> */}
 </div>
  )
}

export default Menu;
