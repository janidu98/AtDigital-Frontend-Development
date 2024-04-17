import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper footer_container">
        <div className="above_footer">
          <div className="left_side">
            <img src="../../src/assets/logo.svg" alt="logo" />
            <p>
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>

          <div className="right_side">
            {/* Our Technologies */}
            <div className="technologies">
              <span>Our Technologies</span>
              <ul>
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="services">
              <span>Our Services</span>
              <ul>
                <li>Social media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="below_footer">
          <div className="below_content">
            <p>Privacy Policy</p>
            <span></span>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
