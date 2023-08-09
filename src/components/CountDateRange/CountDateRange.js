import React, { useState } from "react";

const CountDateRange = () => {
  const date = new Date();
  const [range, setRange] = useState(1);
  const [counterInput, setCounterInput] = useState(0);
  date.setDate(date.getDate() + counterInput);

  const handleCountNext = () => {
    setCounterInput((prev) => range + prev);
  };
  const handleCountPrev = () => {
    setCounterInput((prev) => prev - range);
  };

  const handleCounterInput = (e) => {
    setCounterInput(+e.target.value);
  };
  const handleRange = (e) => {
    setRange(+e.target.value);
  };
  const handleReset = () => {
    setRange(1);
    setCounterInput(0);
  };

  return (
    <div className="countdaterange">
      <div>
        <input type="range" min="0" max="20" onChange={handleRange} />
        <span>{range}</span>
      </div>
      <div className="couuntby5" style={{ margin: "30px 0" }}>
        <span
          onClick={handleCountNext}
          style={{ fontSize: "25px", margin: "0 10px" }}
        >
          +
        </span>
        <input type="text" value={counterInput} onChange={handleCounterInput} />
        <span
          onClick={handleCountPrev}
          style={{ fontSize: "25px", margin: "0 10px" }}
        >
          -
        </span>
      </div>
      <div className="dateText" style={{ fontSize: "16px", margin: "20px 0" }}>
        {counterInput === 0
          ? `today is ${date.toDateString()}`
          : counterInput > 0
          ? `${counterInput} days form tody is ${date.toDateString()}`
          : `${counterInput} days passed form today was ${date.toDateString()}`}
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CountDateRange;
