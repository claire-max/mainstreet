import '../index.css'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo1.png"
import {AiOutlineClockCircle, AiOutlinePhone} from 'react-icons/ai'
import {BiEnvelope} from 'react-icons/bi'


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
                                    <AiOutlineClockCircle className="menu" size={25} style={{color: 'white'}}/>
                                    </div>
                                    <div className="top-bar-text">
                                        <h3>Hours of Operation</h3>
                                        <p>24 hours</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="top-bar-item">
                                    <div className="top-bar-icon">
                                        <AiOutlinePhone className="menu" size={25} style={{color: 'white'}}/>
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
                                        <BiEnvelope className="menu" size={25} style={{color: 'white'}}/>
                                    </div>
                                    <div className="top-bar-text">
                                        <h3>Email Us</h3>
                                        <p> wmarkfreeman@gmail.com</p>
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
            <Nav.Link href="/prices" className="navitem nav-link text-white me-5">Pricing</Nav.Link>
            <Nav.Link href="/contact" className="navitem nav-link text-white me-5">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="tel:530-529-3002" className="btn btn-custom p-3">Call Now</Nav.Link>
            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
     
 </div>
  )
}

export default Menu;
