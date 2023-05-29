import React from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar';
import './App.css';

function Chatbot() {
  return (
    <>
      <Navbar />
      <div className="App">
        <main>
          <div className="iframe-container">
            <iframe
              title="Chatbot"
              src="https://console.dialogflow.com/api-client/demo/embedded/6a607473-6df8-48c8-959d-af5c8fa4fa40"
              allow="microphone;"
            ></iframe>
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

export default Chatbot;
