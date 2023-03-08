import React from "react";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Prices from "./pages/Prices";
import Services from "./pages/Services";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router >
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/prices" element={<Prices/>} />
      <Route path="/contact" element={<Contact/>} />
     
    </Routes>
    </Router>
  );
}

export default App;
