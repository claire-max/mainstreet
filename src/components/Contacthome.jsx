import '../index.css'
import {AiOutlineClockCircle, AiOutlinePhone} from 'react-icons/ai'
import {BiEnvelope} from 'react-icons/bi'
import pricewash from "../assets/pricewashing.png"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacthome = () => {


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
        <br/>
        <br/>
         <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image d-flex justify-content-center align-items-center '
        style={{ backgroundImage: `url(${pricewash})`, height: 300, backgroundPosition: 'center',
        backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
                <br/>
                <br/>
              
              <h1 className=' priceheading mb-3'>Get In touch</h1>
             
            </div>
          </div>
        </div>
      </div>
    </header>

<div className="contact">
<div className="container">
    <div className="section-header text-center">
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
                        <p> 24 hours </p>
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
                        <p>mainstreetcarwashrb@gmailcom</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-7">
            <div className="contact-form">
                <div id="success"></div>
                {status && renderAlert()}
                <form ref={form} onSubmit={sendEmail} name="sentMessage" id="contactForm" >
                    <div className="control-group">
                        <input type="text" name="user_name" className="form-control" id="inputID"  placeholder="Name" required="required" data-validation-required-message="Please enter your name" />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                        <input type="email" name="user_email" className="form-control" id="inputID" placeholder="Email" required="required" data-validation-required-message="Please enter your email" />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                        <input type="subject" name="user_subject" className="form-control" id="inputID" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                        <textarea className="form-control" name="message" id="inputID" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                        <p className="help-block text-danger"></p>
                    </div>
                    <div>
                        <button className="btn btn-custom" type="submit" id="inputID">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
       
    </div>
</div>
</div>
      
    </div>
  )
}

const renderAlert = () => (
    <div className="AlertMessage">
      <p>Message Sent!</p>
    </div>
  )
  

export default Contacthome


