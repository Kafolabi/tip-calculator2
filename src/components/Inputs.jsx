// import { useState } from "react";

const Inputs = function ({ inputType, inputSymbol, onChange, value }) {
//   const [value, setValue] = useState("");
  return (
    <>
      <label htmlFor={inputType} className="block text-formcalculate">
        {inputType}
      </label>
      <div className="flex items-center bg-input rounded-lg mt-2 mb-7 w-full text-2xl p-[0.375rem] focus-within:ring-2 focus-within:ring-[#5EC1AC]">
        <span className="text-formcalculate text-2xl mr-2 ps-2">{inputSymbol}</span>
        <input
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          type="number"
          id={inputType}
          placeholder="0"
          className="hover:cursor-pointer w-full bg-transparent text-right text-formcalculate outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
          style={{
            MozAppearance: "textfield",
          }}
        />

      </div>
    </>
  );
};

export default Inputs;