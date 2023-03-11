
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
                                <img className='logo' src={logo} alt="Logo" /> 
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

        <Navbar collapseOnSelect expand="lg" className='con' style={{color:"#fff"}} >
      <Container className="contain" >
        <Navbar.Brand href="#home" style={{color:"#fff"}} ></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{
        backgroundColor: 'white',}} className="togglenav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/services" className="navitem nav-link text-white me-5">Services</Nav.Link>
            <Nav.Link href="/prices" className="navitem nav-link text-white me-5">Prices</Nav.Link>
            <Nav.Link href="/contact" className="navitem nav-link text-white me-5">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="tel:916-934-9148" className="btn btn-custom p-3">Call Now</Nav.Link>
            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
     
 </div>
  )
}

export default Menu;
