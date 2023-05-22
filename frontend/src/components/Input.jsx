import './Input.css';
import ellipse from './ellipse.png'

function Input() {
  return (
    <div className="App">
        <main>
        <div>
        <img src={ellipse}  alt="photo"/> Maria Anastasia
        <img src={ellipse}  alt="photo"/> Anisya Mahira
        <img src={ellipse}  alt="photo"/> Cicilia Widhia
        <img src={ellipse}  alt="photo"/> Noer Azizah
          <div>
          </div>
        </div>
        </main>
    </div>
  );
}

export default Input;