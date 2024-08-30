import "./index.css";
import { useState } from "react";
import langEn from "./language/en.json";
import langPL from "./language/pl.json";
import { TipCalculator } from "./components/TipCalculator";

export default function App() {
  const [lang, setLang] = useState("PL");
  return (
    <div className="app">
      <h1 className="rubik-bubbles-regular text-center text-[40px]">
        Tip Calculator
      </h1>
      <div className="flex justify-end">
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="PL">PL</option>
          <option value="EN">EN</option>
        </select>
      </div>
      <TipCalculator langData={lang === "PL" ? langPL : langEn} />
    </div>
  );
}
