import React from "react";

const Bill = ({ bill, handleBill }) => {
  return (
    <div>
      <label>Bill:</label>
      <input
        type="text"
        placeholder="type bill"
        value={bill}
        onChange={(e) => handleBill(+e.target.value)}
      />
    </div>
  );
};

export default Bill;
