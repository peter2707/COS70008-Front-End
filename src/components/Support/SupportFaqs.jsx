import React, { useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";
import { Transition } from "@headlessui/react";

const qaPairs = [
  {
    question: "What is an HIV Test Kit?",
    answer:
      "An HIV test kit is a medical device or package that allows individuals to test for the presence of the human immunodeficiency virus (HIV) in their body, typically through the detection of HIV antibodies or antigens in a person's blood, saliva, or urine. These kits are designed to provide a convenient and confidential way for individuals to check their HIV status at home or in non-clinical settings. There's only one type of test kit available for purchase in Australia is the blood-based testing kit. You can purchase it ",
    link: "https://atomohivtest.com/home.php",
  },
  {
    question: "Are HIV Test Kits accurate?",
    answer: "Yes, HIV test kits are generally accurate.",
  },
  {
    question: "Can I trust the confidentiality of my data?",
    answer: "Yes, your data is kept confidential.",
  },
  {
    question: "How often should I get tested for HIV?",
    answer: "It's recommended to get tested regularly.",
  },
];

export default function SupportFaqs() {
  const [isVisible, setIsVisible] = useState(Array(qaPairs.length).fill(false));

  function handleSelectQuestion(index) {
    // Toggle the visibility of the answer for the clicked question
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsVisible(updatedVisibility);
  }

  return (
    <section className="support-faqs mx-6 sm:mx-8">
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faqs-wrapper">
        <div className="questions-container w-full">
          {qaPairs.map((qaPair, index) => (
            <div
              key={index}
              className={`my-4 pr-4 cursor-pointer border border-slate-700 px-4 py-6 rounded-md ${
                isVisible[index] ? "text-primary" : ""
              }`}
              onClick={() => handleSelectQuestion(index)}
            >
              <div className="flex justify-between items-center">
                <h6>{qaPair.question}</h6>
                {isVisible[index] ? (
                  <HiMinusSm className="text-3xl text-primary" />
                ) : (
                  <HiPlusSm className="text-3xl text-primary" />
                )}
              </div>
              <Transition
                show={isVisible[index]}
                enter="transition-opacity duration-150 ease-in"
                enterFrom="opacity-0"
                enterTo="opacity-200"
                leave="transition-opacity duration-150 ease-out"
                leaveFrom="opacity-200"
                leaveTo="opacity-0"
              >
                <div>
                  <p className="text-black text-sm pt-2">
                    {qaPairs[index].answer}
                    {qaPairs[index].link && (
                      <a
                        className="link"
                        href={qaPairs[index].link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here.
                      </a>
                    )}
                  </p>
                </div>
              </Transition>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
