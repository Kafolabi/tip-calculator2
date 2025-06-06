import Inputs from "./Inputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import CalculateTip from "./CalculateTip";
import { useState } from "react";

const FormCalculateTip = () => {
  const [tipId, setTipId] = useState(null);
  const [customTip, setCustomTip] = useState("");
  const [bill, setBill] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const tipOptions = [5, 10, 15, 25, 50];

  const tipPercentage = tipId !== null ? tipOptions[tipId] : Number(customTip);

  const tipAmountPerPerson =
    bill && numberOfPeople
      ? (bill * (tipPercentage / 100)) / numberOfPeople
      : 0;

  const totalPerPerson =
    bill && numberOfPeople ? bill / numberOfPeople + tipAmountPerPerson : 0;

  return (
    <section className="flex items-center mt-4 bg-white rounded-2xl shadow-md justify-center mx-80 text-sm font-bold">
      <form className="max-w-md w-1/2 block ps-6 py-6">
        <Inputs
          inputType="Bill"
          inputSymbol="₦"
          onChange={setBill}
          value={bill}
        />
        <label htmlFor="tip" className="block text-formcalculate mt-6">
          Select tip %
        </label>
        <div className="flex gap-3 mt-4">
          {tipOptions.slice(0, 3).map((tip, index) => (
            <button
              key={index}
              className={`w-1/3 ${
                tipId === index
                  ? "bg-main text-secondary"
                  : "bg-secondary text-white"
              } text-lg rounded-md px-7 py-2 hover:bg-primary hover:text-secondary hover:cursor-pointer`}
              onClick={(e) => {
                e.preventDefault();
                setTipId(index);
                setCustomTip(""); // Clear custom input
              }}
            >
              {tip}%
            </button>
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          {tipOptions.slice(3, 5).map((tip, index) => (
            <button
              key={index + 3}
              className={`mb-8 w-1/3 ${
                tipId === index + 3
                  ? "bg-main text-secondary"
                  : "bg-secondary text-white"
              } text-lg rounded-md px-7 py-2 hover:bg-primary hover:text-secondary hover:cursor-pointer`}
              onClick={(e) => {
                e.preventDefault();
                setTipId(index + 3);
                setCustomTip(""); // Clear custom input
              }}
            >
              {tip}%
            </button>
          ))}
          <input
            type="number"
            value={customTip}
            onChange={(e) => {
              const value = e.target.value;
              setCustomTip(value);
              setTipId(null); // Deselect preset tips
            }}
            placeholder="Custom"
            className="rounded-sm mb-8 w-1/3 bg-input placeholder:text-center text-end pe-2 placeholder:text-secondary placeholder:text-lg text-lg text-black [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5EC1AC] hover:text-secondary"
          />
        </div>
        <Inputs
          onChange={setNumberOfPeople}
          value={numberOfPeople}
          inputType="Number of people"
          inputSymbol={<FontAwesomeIcon className="text-base" icon={faUser} />}
        />
      </form>
      <CalculateTip
        tipAmountPerPerson={tipAmountPerPerson}
        totalPerPerson={totalPerPerson}
        onReset={() => {
          setBill("");
          setNumberOfPeople("");
          setTipId(null);
          setCustomTip("");
        }}
      />
    </section>
  );
};

export default FormCalculateTip;
