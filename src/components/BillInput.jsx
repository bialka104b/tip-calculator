export function BillInput({ bill, onSetBill, langData }) {
  return (
    <div className="bill-input flex flex-col text-center">
      <label>{langData.HowMuchWasTheBill}</label>
      <input
        className="text-center"
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
