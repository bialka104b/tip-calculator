export function SelectPercentage({ children, percentage, onSelect, langData }) {
  return (
    <div className="select-percentage flex flex-col text-center">
      <label>{children}</label>
      <select
        className="text-center"
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">{langData.Dissatisfied} (0%)</option>
        <option value="5">{langData.ItWasOkay} (5%)</option>
        <option value="10">{langData.ItWasGood} (10%)</option>
        <option value="20">{langData.AbsolutelyAmazing} (20%)</option>
      </select>
    </div>
  );
}
