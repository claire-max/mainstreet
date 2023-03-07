import React from 'react'
import './menu.css'

//Hamburger
const Menu = () => {

    return (
       
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

  )
}

export default Menu;


