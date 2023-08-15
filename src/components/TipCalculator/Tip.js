import React from "react";

const Tip = ({ children, tip, onTip }) => {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onTip(+e.target.value)}>
        <option value="0">Worse 0% tip</option>
        <option value="5">good 5% tip</option>
        <option value="10">better 10% tip</option>
        <option value="20">best 20% tip</option>
      </select>
    </div>
  );
};

export default Tip;
