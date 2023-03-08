import React from 'react'
import '../index.css'
// import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
        <Menu/>
        <div className="contact">
            <div className="container">
                <div className="section-header text-center">
                    <p>Get In Touch</p>
                    <h2>Contact us</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-info">
                            <h2>Quick Contact Info</h2>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="far fa-clock"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Opening Hour</h3>
                                    <p>Mon - Sun, 24 hours </p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="fa fa-phone-alt"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Call Us</h3>
                                    <p>530 529-3002</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <i className="far fa-envelope"></i>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Email Us</h3>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                <div className="control-group">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn btn-custom" type="submit" id="sendMessageButton">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="google-map-code">
                    <iframe title="myframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5334180128516!2d-122.23538198420765!3d40.174940979393874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80828397fe5b2f11%3A0x9b58e72255b224e2!2sMain%20Street%20Car%20Wash!5e0!3m2!1sen!2sus!4v1678235264482!5m2!1sen!2sus" width="500" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
       <Footer/>
    </div>
  )
}

export default Contact

