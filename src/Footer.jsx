// Footer.js
import React from 'react';
import { FaPhone, FaFacebook, FaGlobe } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      <p className="footer-subtitle">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      <p className="footer-categories">
        {/* Categories */}
      </p>
      <p className="footer-subtitle">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      <p className="footer-categories">
        {/* Categories */}
      </p>
      <div className="footer-contact">
        <div className="contact-item">
          <FaPhone className="icon phone-icon" />
          <span className="contact-info">Toll free 1800 200 1234</span>
        </div>
        <div className="contact-item">
          <FaFacebook className="icon facebook-icon" />
          <span className="contact-info">www.facebook.com/cripumps</span>
        </div>
        <div className="contact-item">
          <FaGlobe className="icon globe-icon" />
          <span className="contact-info">www.crigroups.com</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
