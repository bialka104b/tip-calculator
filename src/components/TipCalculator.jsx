import { useState } from "react";
import { Reset } from "./Reset";
import { Output } from "./Output";
import { SelectPercentage } from "./SelectPercentage";
import { BillInput } from "./BillInput";

export function TipCalculator({ langData }) {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * ((percentage1 + percentage2) / 2 / 100)).toFixed(2);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="tip-calculator mt-16 flex flex-col gap-4">
      <BillInput bill={bill} onSetBill={setBill} langData={langData} />
      <SelectPercentage
        percentage={percentage1}
        onSelect={setPercentage1}
        langData={langData}
      >
        {langData.HowDidYouLikeTheService}
      </SelectPercentage>
      <SelectPercentage
        percentage={percentage2}
        onSelect={setPercentage2}
        langData={langData}
      >
        {langData.HowDidYourFriendLikeTheService}
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} langData={langData} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
