import { useState } from 'react';
import React from 'react';
import Navbar from '../components/Navbar';
import './App.css';
import axios from "axios";
import { toast } from "react-toastify";


function Main() {
  const [landArea, setLandArea] = useState(0);
  const [buildingArea, setBuildingArea] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [garage, setGarage] = useState(0);
  const [prediction, setPrediction] = useState();

  const onSubmit = async () => {
    if (landArea === "" || buildingArea === "" || bedrooms === "" || bathrooms === "" || garage === ""){
      toast.error("All field must be filled!");
      console.log("All field must be filled!")
    } else {
      axios 
        .get("https://ciciliawidhiii.pythonanywhere.com/prediction", {
        params: {
          LT: landArea,
          LB: buildingArea,
          JKT: bedrooms,
          JKM: bathrooms,
          GRS: garage,
        },
      }) 
        .then((response)=> {
          if(response.status <400) {
            toast.success("Prediction Success!");
            setPrediction(response.data.result)
          }
          console.log(response);
        })
        .catch((err) => {
          console.log(err.response);
        });  
    }
  };

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
        <label className= "text-lg text-black"> Land Area: </label>
        <input
          className= "border border-black h-[5vh]  px-4 rounded-md shadow-md mb-6"
          placeholder= "input land area"
          type="number"
          required
          value={landArea}
          onChange={(event) => setLandArea(event.target.value)}
        />
        <br></br>
        <label className= "text-lg text-black"> Building Area: </label>
        <input
          className= "border border-black h-[5vh]  px-4 rounded-md shadow-md mb-6"
          placeholder= "input building area"
          type="number"
          required
          value={buildingArea}
          onChange={(event) => setBuildingArea(event.target.value)}
        />
        <br></br>
        <label className= "text-lg text-black"> Number of Bedrooms: </label>
        <input
          className= "border border-black h-[5vh]  px-4 rounded-md shadow-md mb-6"
          placeholder= "input number of bedrooms"
          type="number"
          required 
          value={bedrooms}
          onChange={(event) => setBedrooms(event.target.value)}
        />
        <br></br>
        <label className= "text-lg text-black"> Number of Bathrooms: </label>
        <input
          className= "border border-black h-[5vh]  px-4 rounded-md shadow-md mb-6"
          placeholder= "input number of bathrooms"
          type="number"
          required
          value={bathrooms}
          onChange={(event) => setBathrooms(event.target.value)}
        />
        <br></br>
        <label className= "text-lg text-black"> Existing Garage: </label>
        <input
          className= "border border-black h-[5vh]  px-4 rounded-md shadow-md mb-6"
          placeholder= "input garage"
          type="number"
          required
          value={garage}
          onChange={(event) => setGarage(event.target.value)}
        />
        <p>
          Existing garage: type 1 if garage exist and type 0 if garage doesnt exist
        </p>
        <br></br>

        
        <button 
          className="bg-hijau border rounded-md px-5 py-3 font-semibold text-white hover:bg-hijau-tua hover:text-white" 
          onClick ={onSubmit}
          type="button"
          >
            House Price
        </button>

        <div className="result">
          <label className="text-lg text-black">
            Estimated Price: {prediction !== undefined && prediction.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
          </label>
        </div>
      </div>
      <footer>
        <p>About Us</p>
        <p>Contact</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
      </footer>
    </>
  );
}

export default Main;
