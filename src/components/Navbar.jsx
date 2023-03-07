
import '../index.css'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="top-bar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12">
                        <div className="logo">
                            <a href="/">
                                <h1>Main<span>Street</span></h1>
                                {/* <img src="img/logo.jpg" alt="Logo"/>  */}
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
                                        <h3>Opening Hour</h3>
                                        <p>Mon - Fri, 24 hours</p>
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
  

     
     <div className="nav-bar">
     <div className="container">
         <nav className="navbar bg-dark navbar-dark text-light ">
           
             {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                 <span className="navbar-toggler-icon"></span>
             </button> */}

           
                 {/* <div className="navbar-nav mr-auto"> */}
                     {/* <a href="/" className="nav-item nav-link active">Home</a> */}
                     <a href="" className="nav-item nav-link">About</a>
                     <a href="" className="nav-item nav-link">Service</a>
                     <a href="" className="nav-item nav-link">Price</a>
                     <a href="/contact" className="nav-item nav-link">Contact</a>
                 {/* </div> */}
                 <div className="ml-auto">
                     <a className="btn btn-custom" href="#">Call Now</a>
                 
             </div>
         </nav>
     </div>
 </div>
 </div>
  )
}

export default Navbar;
