import React from "react";
import './consultation.css'

const Consultation = () => {
  return (
    <div className="container">
      {/* Web & Mobile App Development */}
      <div className="app_development">
        <div className="app_img">
          <img src="../../src/assets/img1.png" alt="computer_img" />
        </div>

        <div className="app_development_content">
          <h5>Web & Mobile App Development</h5>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Digital Strategy Consulting */}
      <div className="digital">
        <div className="digital_content">
          <h5>Digital Strategy Consulting</h5>
          <p>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <button className="btn">Learn More</button>
        </div>

        <div className="digital_img">
          <img src="../../src/assets/img2.png" alt="search_img" />
        </div>
      </div>
    </div>
  );
};

export default Consultation;
