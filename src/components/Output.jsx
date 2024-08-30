export function Output({ bill, tip, langData }) {
  return (
    <h3 className="output text-center font-bold">
      <p>{langData.Eating} - {bill}zł</p>
      +
      <p>{tip}zł {langData.tip}</p>
      {langData.YouPay}:
      <p>{bill + Number(tip)}zł</p>
    </h3>
  );
}
