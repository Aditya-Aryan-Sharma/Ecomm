import './App.css';
import './style.css'
import React from "react";
import i1 from './img1.jpg';
import i2 from './img2.jpg'
import i3 from "./img3.jpg"

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1 className='content-title'><b>Featured Products</b></h1>
          <p>Explore and discover a variety of products</p>
        </header>
        <div class="container">
          <img src={i1} alt="Background Image" class="background-image-right"/>
          <img src={i3} alt="Background Image" class="background-image-left"/>
          <img src={i2} alt="Front Image" class="front-image"/>
        </div>
        <div class="owl-dots">
          <button role="button" class="owl-dot active">
            <span></span>
          </button>
          <button role="button" class="owl-dot active">
            <span></span>
          </button>
          <button role="button" class="owl-dot active">
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
