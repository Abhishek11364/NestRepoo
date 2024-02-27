// Component.js
import React from 'react';
import Footer from './Footer'; // Import the Footer component
import './Component.css'; // Import the CSS file

export default function Component() {
  return (
    <div className="container">
      <header className="header">
        <img
          alt="C.R.I. FLUID SYSTEMS logo"
          className="logo"
          src="/placeholder.svg"
        />
        <h1 className="title">
          C.R.I. FLUID SYSTEMS
          <br />
          <span className="subtitle">Pumping trust. Worldwide.</span>
        </h1>
      </header>
      <section className="section">
        <h2 className="section-title">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
        </h2>
        <div className="section-content">
          <div className="content-text">
            <p className="content-italic">
              Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint
              Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
              Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
          <img
            alt="Energy Conservation Award"
            className="award-image"
            src="/placeholder.svg"
          />
        </div>
      </section>
      <section className="section">
        <p className="saving-text">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN
          9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
        <div className="product-images">
          <img alt="Valves" className="product-image" src="/placeholder.svg" />
          {/* Other product images */}
        </div>
      </section>
      <Footer /> {/* Render Footer component */}
    </div>
  );
}
