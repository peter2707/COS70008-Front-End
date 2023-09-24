import React from "react";
import { HiInformationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function NegativeResult() {
  const todoSteps = [
    {
      name: "1. Set reminder for a retest",
      description: "It is recommended to retest after 3 months. Set reminder ",
      link: <Link to="/learn">now!</Link>,
    },
    {
      name: "2. Order new test kits",
      description:
        "Prepare yourself by stocking up new test kits. You can purchase HIV self-testing ",
      link: (
        <a
          href="https://atomohivtest.com/home.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
        </a>
      ),
    },
    {
      name: "3. Reduce your risk",
      description:
        "Get familiar with HIV symptoms, treatments, preventions and more in ",
      link: <Link to="/learn">Learn</Link>,
    },
  ];
  return (
    <div className="negative-result-container">
      <div className="info-banner flex justify-center items-start p-8 bg-primaryLight rounded-lg">
        <span className="mr-2">
          <HiInformationCircle className="text-primary w-6 h-6" />
        </span>

        <p>
          <b>Important: </b>It is important to know if it has been more than 3
          months since your last risk event. If it has, and you have performed
          the test correctly, then you are likely to be HIV negative. If it has
          been less than 3 months since your risk event, you will need to test
          again in 3 months.
        </p>
      </div>

      <div className="mt-4">
        <h1>What to do?</h1>
        <div className="todo-steps w-full grid sm:grid-cols-3 gap-2 mt-4">
          {todoSteps.map((step, index) => (
            <div className="w-auto p-4 mx-2 bg-white rounded-lg" key={index}>
              <p className="text-lg font-semibold sm:text-2xl">{step.name}</p>
              <div className="text-wrapper">
                <p className="text-sm sm:text-base">
                  {step.description}
                  <span className="underline text-primary font-medium">
                    {step.link}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
