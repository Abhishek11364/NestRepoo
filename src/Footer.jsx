// Footer.js
import React from "react";
import { FaPhone, FaFacebook, FaGlobe } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-subtitle">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <p className="footer-categories">
        <span className="category-group">
          CHEMICALS & PROCESS <span className="vertical-line">|</span> POWER{" "}
          <span className="vertical-line">|</span> WATER & WASTE WATER{" "}
          <span className="vertical-line">|</span> OILS & GAS{" "}
          <span className="vertical-line">|</span> PHARMA SUGARS & DISTILLERIES{" "}
          <span className="vertical-line">|</span> PAPER & PULP{" "}
          <span className="vertical-line">|</span> MARINE & DEFENCE{" "}
          <span className="vertical-line">|</span> METAL & MINING{" "}
          <span className="vertical-line">|</span> FOOD & BEVERAGE
          <span className="vertical-line">|</span>
        </span>
        <span className="category-group">
          PETROCHEMICAL & REFINERIES <span className="vertical-line">|</span>{" "}
          SOLAR <span className="vertical-line">|</span> BUILDING{" "}
          <span className="vertical-line">|</span> HVAC{" "}
          <span className="vertical-line">|</span> FIRE FIGHTING{" "}
          <span className="vertical-line">|</span> AGRICULTURE & RESIDENTIAL
        </span>
      </p>
      <div className="footer-contact">
        <div className="contact-item">
          <div className="icon-circle">
            {" "}
            {/* Circle container */}
            <FaPhone className="icon phone-icon" /> {/* Phone icon */}
          </div>
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
