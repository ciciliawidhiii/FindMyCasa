import React from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar';
// import InputPage from './components/InputPage';
import img from './img_01.png';
import './App.css';

function Landing() {
  return (
    <>
      <Navbar />
      <div className="App">
        <main>
          <div className="error-container">
            <h2>Find My Casa</h2>
            <p>Your future home with artificial intelligence recommendation</p>
            <div className="image-container">
              <img src={img} className="notfound-logo" alt="logo" />
            </div>
          </div>
        </main>
        <footer>
          <p>About Us</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </footer>
      </div>
    </>
  );
}

export default Landing;
