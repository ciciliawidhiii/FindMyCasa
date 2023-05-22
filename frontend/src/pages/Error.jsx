import logo from './logo_FMC.png';
import logo_notfound from './logo_notfound.png';
import './App.css';
import Navbar from '../components/Navbar';
import Landing from "./Landing"

function Error() {
  return (
    <>
      <Navbar />
        <div className="App">
            <header>
            </header>
            <main>
            <div className="error-container">
            <div className="image-container">
                <img src={logo_notfound} className="notfound-logo" alt="logo" />
            </div>
            <h2>Find My Casa</h2>
            <p>Sorry, the page you are looking for could not be found.</p>
            <a href="./">Back to home</a>
            </div>
        </main>
        </div>
    </>
  );
}

export default Error;
