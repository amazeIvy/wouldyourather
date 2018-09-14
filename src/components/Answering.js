import React, { Component } from 'react';

class Answering extends Component {
  render() {
    return (
      <section className="container answer-container">
        <div className="answer-title">
          <div>
            <img src="https://image.flaticon.com/icons/svg/206/206857.svg" alt="avatar" />
          </div>
          <h3>Would you rather</h3>
        </div>
        <div className="option-container">
          <p className="or-icon"><span>or</span></p>
          <div className="option-left">
            <p>Have every commercial be an annoying Geico ad for the rest of your life</p>
          </div>
          <div className="option-right">
            <p>Have every commercial be a Verizon "Can you hear me now?" ad for the rest of your life</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Answering;
