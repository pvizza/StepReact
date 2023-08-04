import { useState } from 'react';
import './SideComponent.css';

const SideComponent = ({currentStep}) => {
  return (
    <section className="side-component">
      <div className="grid-container">
        <div className="grid-item">
          <p className={currentStep === 1 ? "step-number step-number-circle active" : "step-number step-number-circle"}>1</p>
          <div>
            <span>step 1</span>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="grid-item">
          <p className={currentStep === 2 ? "step-number step-number-circle active" : "step-number step-number-circle"}>2</p>
          <div>
            <span>step 2</span>
            <p>SELECT PLAN</p>
          </div>
        </div>
        <div className="grid-item">
          <p  className={currentStep === 3 ? "step-number step-number-circle active" : "step-number step-number-circle"}>3</p>
          <div>
            <span>step 3</span>
            <p>ADD ONSs</p>
          </div>
        </div>
        <div className="grid-item">
          <p className={currentStep === 4 ? "step-number step-number-circle active" : "step-number step-number-circle"}>4</p>
          <div>
            <span>step 4</span>
            <p>SUMMARY</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideComponent;