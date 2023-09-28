import React from "react";
import { Link } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import FindNearby from "./FindNearby";

export default function PositiveResult() {
  const todoSteps = [
    {
      name: "1. Confirm your results",
      description: "Find a nearby clinical to confirm your test result.",
    },
    {
      name: "2. Ask questions",
      description:
        "Make sure to ask questions during your person’s first visit with a health care centre.",
    },
    {
      name: "3. Learn more about HIV",
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
          <b>Important: </b>Being HIV positive is a manageable condition and
          people living with HIV are able to live long, active and healthy
          lives. If you were using a self-testing kit please keep in mind that
          this is a screening test and getting a positive test result does not
          necessarily mean that you have HIV. If the test result is positive,
          you need to go for follow up testing at a healthcare facility. Early
          diagnosis of HIV means treatment can start sooner.
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

      <FindNearby />
    </div>
  );
}
