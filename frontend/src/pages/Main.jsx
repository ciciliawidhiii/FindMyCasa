import React from 'react';
import Navbar from '../components/Navbar';
import logo from './logo_FMC.png';
import img from './img_01.png';
import './App.css';

function Main() {
  return (
    <>
      <Navbar />
      <div className="App">
        <h1>Let's find your casa!</h1>
        <p>
          Find My Casa is a great place to start considering your new house. <br />
          Tell us about your preferences, and let the mirror on the wall tells you
          the truth!
        </p>
        <div className="dropdown-container">
          <div className="dropdown">
          <br />
          <label htmlFor="year">Year:</label>
            <select id="dropdown">
                <option value=""></option>
                <option value="1987">1987</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
            </select>
          </div>
        </div>
        <br />
        <div className="dropdown">
          <label htmlFor="land-area">Land Area:</label>
          <select id="land-area" name="land-area">
            <option value=""></option>
            <option value="1000">1,000 sqm</option>
            <option value="2000">2,000 sqm</option>
            <option value="5000">5,000 sqm</option>
            <option value="10000">10,000 sqm</option>
          </select>
          <br />
          <br />
          <label htmlFor="building-area">Building Area: </label>
          <select id="building-area" name="building-area">
            <option value=""></option>
            <option value="Jakarta Selatan">Jakarta Selatan</option>
            <option value="Jakatra Utara">Jakatra Utara</option>
            <option value="Jakarta Timur">Jakarta Timur</option>
            <option value="Jakarta Barat">Jakarta Barat</option>
            <option value="Jakarta Pusat">Jakarta Pusat</option>
          </select>
          <br />
          <br />
          <label htmlFor="bedrooms">Bedrooms:</label>
          <select id="bedrooms" name="bedrooms">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <br />
          <label htmlFor="bathrooms">Bathrooms:</label>
          <select id="bathrooms" name="bathrooms">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <br />
        <br />
        <div className="radio-container">
          <div className="radio-group">
            <span>Garage:</span>
            <label>
              <input type="radio" name="garage" value="yes" />
              Yes
            </label>
            <label>
              <input type="radio" name="garage" value="no" />
              No
            </label>
          </div>
        </div>
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

export default Main;
