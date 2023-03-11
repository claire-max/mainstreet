import React from 'react';
import carwash from "../assets/car-wash.png";
import car from "../assets/car.png";
import vending from "../assets/vending-machine.png";
import bigbay from "../assets/big-bay.png";
import vacuum from "../assets/pressure-washer.png"
import  "../index.css"
import { Card, Row } from 'react-bootstrap';

const Jumbotron = () => {
  return (
    
    <div>
        <div className="" style={{
        backgroundColor: '#6c7b8e',
      }}>
        <br></br> 
        <br></br>
        <br></br>
        <br></br>
      <div className="containerhero">
           <div className="items-center w-full" style={{
        backgroundColor: '#6c7b8e'}} > 
              <div className="max-w-lg -1">
                  <h1 className="heroban text-xl text-center text-white" style={{fontWeight:'bolder'}}>Our Services</h1>
                  <div className="mt-4 text-center">
                  <br></br>      
                  <br></br>
                  <br></br>
                  </div>
                  
              </div>
          </div>
          </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>


    <Row className="g-4 cards">
          <Card className="text-light carwashcard me-3" style={{ backgroundColor:'#202C45',
        width:200, height:200}}>
            <br/>
      <Card.Img src={carwash} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Exterior Wash</Card.Title>
      </Card.ImgOverlay>
    </Card>

    <Card className="text-light me-3 carwashcard" style={{ backgroundColor:'#202C45',
        width:200, height:200}}>
            <br/>
      <Card.Img src={car} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Self-Serve Bay Washer</Card.Title>
      </Card.ImgOverlay>
    </Card>

    <Card className="text-light me-3 carwashcard" style={{ backgroundColor:'#202C45',
        width:200, height:200}}>
            <br/>
      <Card.Img src={bigbay} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Truck/RV/Auto Wash Bay</Card.Title>
      </Card.ImgOverlay>
    </Card>

    <Card className="text-light me-3 carwashcard" style={{ backgroundColor:'#202C45',
        width:200, height:200}}>
            <br/>
      <Card.Img src={vacuum} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Self-Serve Vacuums</Card.Title>
      </Card.ImgOverlay>
    </Card>

    <Card className="text-light me-3 carwashcard" style={{ backgroundColor:'#202C45',
        width:200, height:200}}>
            <br/>
      <Card.Img src={vending} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Vending Detail Center</Card.Title>
      </Card.ImgOverlay>
    </Card>
    </Row>

                </div>
  )
}

export default Jumbotron