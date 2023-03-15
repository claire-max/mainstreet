import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css'
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import {AiOutlineClockCircle, AiOutlinePhone} from 'react-icons/ai'
import {BiEnvelope} from 'react-icons/bi'

const Contact = () => {

    const form = useRef();
const [status, setStatus] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm(
    'service_7ikoppg', 
    'template_2qbk6xi',
     form.current, 
     'a5diYV5HVT6bkQTz3')
      .then((result) => {
          console.log(result.text);
          setStatus('SUCCESS');
      }, (error) => {
          console.log(error.text);

      });
   
  e.target.reset()
  }

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
                    <div className="col-md-5">
                        <div className="contact-info">
                            <h2>Quick Contact Info</h2>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <AiOutlineClockCircle size={25}/>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Hours of Operation</h3>
                                 <p>Mon-Sun, 24 hours</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                  <AiOutlinePhone size={25}/>
                                </div>
                                <div className="contact-info-text">
                                    <h3>Call Us</h3>
                                    <p>530 529-3002</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                <BiEnvelope size={25}/> 
                                </div>
                                <div className="contact-info-text">
                                    <h3>Email Us</h3>
                                    <p> mainstreetcarwashrb@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="contact-form">
                            <div id="success"></div>
                            {status && renderAlert()}
                            <form name="sentMessage" ref={form} onSubmit={sendEmail} id="contactForm" noValidate="noValidate">
                                <div className="control-group">
                                    <input type="text" name="user_name" className="form-control" id="inputID" placeholder="Name" required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="email" name="user_email" className="form-control" id="inputID" placeholder="Email" required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="text" name="user_subject" className="form-control" id="inputID" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control" name="message" id="inputID" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn btn-custom" type="submit" id="sendMessageButton">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="google-map-code">
                    <iframe title="myframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5334180128516!2d-122.23538198420765!3d40.174940979393874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80828397fe5b2f11%3A0x9b58e72255b224e2!2sMain%20Street%20Car%20Wash!5e0!3m2!1sen!2sus!4v1678235264482!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    
                </div>
            </div>
        </div>
       <Footer/>
    </div>
  )
}


const renderAlert = () => (
    <div className="AlertMessage">
      <p>Message Sent!</p>
    </div>
  )

export default Contact

