import React from "react";
import "./faqs.css";

const FAQs = () => {
  return (
    <div className="faqs_container">
      {/* Title of FAQs */}
      <div className="title">
        <h3>Frequently asked questions</h3>
      </div>

      {/* Questions & Answers */}
      <div className="qna">

        <div className="questionWithAnswer">
          <div className="question">
            <p>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</p>
            <img src="/assets/remove.svg" alt="removeImg" />
          </div>
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit
              id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
              Sapien massa morbi risus sagittis tortor integer.
            </p>
          </div>
        </div>

        <div className="onlyQustion">
          <p>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</p>
          <img src="/assets/add.svg" alt="plusImg" />
        </div>

        <div className="onlyQustion">
          <p>Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</p>
          <img src="/assets/add.svg" alt="plusImg" />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
