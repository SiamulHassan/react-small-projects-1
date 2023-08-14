import React, { useState } from "react";
import "./style.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const StepCounter = () => {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(true);
  const handlePrev = () => {
    if (step > 1) {
      setStep((prev) => --prev);
    }
  };
  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => ++prev);
    }
  };
  return (
    <>
      <div className="close" onClick={() => setOpen(!open)}>
        &times;
      </div>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">{`Step${step}: ${messages[step - 1]}`}</p>

          <div className="buttons">
            <button className="previous" onClick={handlePrev}>
              Previous
            </button>
            <button className="next" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StepCounter;
