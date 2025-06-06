const CalculateTip = function ({ tipAmountPerPerson, totalPerPerson, onReset }) {
  return (
    <section className="bg-secondary w-1/2 py-6 m-6 px-5 rounded-xl">
      <section className="flex">
        <h1 className="text-start text-white w-1/2">
          Tip <br /> Amount{" "}
          <span className="line-clamp-1 opacity-50 text-[0.65rem] font-light">
            / person{" "}
          </span>
        </h1>
        <h1 className="text-end text-main w-1/2 text-3xl pt-3 tracking-wider">
          &#8358;{+tipAmountPerPerson.toFixed(2)}
        </h1>
      </section>

      <section className="flex mt-5">
        <h1 className="text-start text-white w-1/2">
          Total
          <span className="line-clamp-1 opacity-50 text-[0.65rem] font-light">
            / person{" "}
          </span>
        </h1>
        <h1 className="text-end text-main w-1/2 text-3xl pt-3 tracking-wider">
          &#8358;{+totalPerPerson.toFixed(2)}
        </h1>
      </section>
      <button onClick={onReset} className="mt-32 bg-main w-full py-3 rounded opacity-25 hover:opacity-100 hover:bg-primary hover:text-secondary">RESET</button>
    </section>
  );
};

export default CalculateTip;
