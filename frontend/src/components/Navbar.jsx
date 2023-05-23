import React from "react";
import LogoCasa from "../assets/LogoCasa.png";
import './Navbar.css'
import Main from "../pages/Main";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
    return (
    <> 
      <nav class=" bg-hijau">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img onClick= {() => navigate("/")} src= {LogoCasa} class= "h-8 mr-3" alt="FindMyCasa Logo" />
          <div className="buttons">
            <button onClick={() => navigate("/Main")}>Looking for Casa?</button>
            <button>Ask me Anything!</button>
          </div>
        </div>
      </nav>
    </>
  );
}