import React from "react";
import LogoCasa from "../assets/LogoCasa.png";
import './Navbar.css'

export default function Navbar() {
    return (
    <> 
      <nav class=" bg-hijau">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src= {LogoCasa} class= "h-8 mr-3" alt="FindMyCasa Logo" />
          <div className="buttons">
            <button>Looking for Casa?</button>
            <button>Ask me Anything!</button>
          </div>
        </div>
      </nav>
    </>
  );
}