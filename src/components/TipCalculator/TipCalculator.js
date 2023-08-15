import React, { useState } from "react";
import Bill from "./Bill";
import Tip from "./Tip";
import Reset from "./Reset";
import Total from "./Total";

const TipCalculator = () => {
  // see note bellow--> state pass kore kora best hobe ei khete(if you have time try it(jonas did it with passing state))
  const [bill, setBill] = useState(null);
  const [myTip, setMyTip] = useState(null);
  const [frndTip, setFrndTip] = useState(null);
  const handleBill = (bill) => {
    setBill(bill);
  };
  const handleMyTip = (tip) => {
    setMyTip(tip);
  };
  const handleFrndTip = (tip) => {
    setFrndTip(tip);
  };
  const yourTip = bill * ((myTip + frndTip) / 2 / 100);
  const yourTotal = `${bill + yourTip} (${bill} + ${yourTip})`;
  const handleReset = () => {};
  return (
    <div className="tip-bg">
      <Bill bill={bill} handleBill={handleBill} />
      <Tip tip={myTip} onTip={handleMyTip}>
        Your Tip:
      </Tip>
      <Tip tip={frndTip} onTip={handleFrndTip}>
        Friend's Tip:
      </Tip>
      <Total Tbill={yourTip} total={yourTotal} />
      <Reset handleReset={handleReset} />
    </div>
  );
};

export default TipCalculator;
// jokhon amra controled input niye kaj korbo tokhon amra prop hisabe state gulo(initial,setState) pathiye dibo, karon controle input value hisabe initial state ke nibo ar onChange e amra setState ke use kori. But func er maddhome o je data child theke ana jay seta korbo na. onno somoy (controled input chara ) amra fun trick use korte pari like Reset component.
