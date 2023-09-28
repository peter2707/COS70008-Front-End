import React, { useState } from "react";
import PositiveResult from "./PositiveResult";
import NegativeResult from "./NegativeResult";

export default function PostTestingGuidance() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleSelectionChange(index) {
    setSelectedIndex(index);
  }

  return (
    <>
      <section className="post-testing-guidance mx-6 sm:mx-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-6">
            Choose an option below for post-testing guidance
          </h1>
          <div className="options-btn">
            <button
              className={`text-xl rounded-full px-6 py-2 mr-3 transition-colors duration-50 ease-in-out ${
                selectedIndex === 0
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-900 hover:bg-primaryLight "
              }`}
              onClick={() => handleSelectionChange(0)}
            >
              Positive
            </button>
            <button
              className={`text-xl rounded-full px-6 py-2 mr-3 transition-colors duration-50 ease-in-out ${
                selectedIndex === 1
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-900 hover:bg-primaryLight "
              }`}
              onClick={() => handleSelectionChange(1)}
            >
              Negative
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 mt-8 p-8 mb-16">
        {selectedIndex === 0 && <PositiveResult />}
        {selectedIndex === 1 && <NegativeResult />}
      </section>
    </>
  );
}
