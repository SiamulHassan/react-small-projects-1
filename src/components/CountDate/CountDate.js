import React, { useState } from "react";

const CountDate = () => {
  const date = new Date();
  const [count, setCount] = useState(0);
  const [countFive, setCountFive] = useState(0);
  date.setDate(date.getDate() + count);
  const hanldeFiveNext = () => {
    setCountFive((prev) => ++prev);
  };
  const hanldeFivePrev = () => {
    setCountFive((prev) => --prev);
  };

  const handleCountNext = () => {
    countFive >= 1
      ? setCount((prev) => prev + countFive)
      : setCount((prev) => ++prev);
  };
  const handleCountPrev = () => {
    countFive >= 1
      ? setCount((prev) => prev - countFive)
      : setCount((prev) => --prev);
  };
  return (
    <div className="countDate">
      <div className="couuntby5">
        <span onClick={hanldeFiveNext} style={{ fontSize: "25px" }}>
          +
        </span>
        <button
          style={{ fontSize: "25px", marginLeft: "10px", marginRight: "10px" }}
        >
          {countFive}
        </button>
        <span onClick={hanldeFivePrev} style={{ fontSize: "25px" }}>
          -
        </span>
      </div>

      <div className="couuntby1" style={{ marginTop: "20px" }}>
        <span onClick={handleCountNext} style={{ fontSize: "25px" }}>
          +
        </span>
        <button
          style={{ fontSize: "25px", marginLeft: "10px", marginRight: "10px" }}
        >
          {count}
        </button>
        <span onClick={handleCountPrev} style={{ fontSize: "25px" }}>
          -
        </span>
      </div>

      <div className="dateText" style={{ fontSize: "16px" }}>
        {count === 0
          ? `today is ${date.toDateString()}`
          : count > 0
          ? `${count} days form tody is ${date.toDateString()}`
          : `${count} days passed form today was ${date.toDateString()}`}
      </div>
    </div>
  );
};

export default CountDate;
