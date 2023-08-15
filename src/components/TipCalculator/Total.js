import React from "react";

const Total = ({ Tbill, total }) => {
  return (
    <div>
      <p>your tip bill is: {Tbill}</p>
      <p>your total bill is: {total}</p>
    </div>
  );
};

export default Total;
