import React, { useState } from "react";

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

export default function FAQs() {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(Array(qaPairs.length).fill(false));

  function handleSelectQuestionDesktop(index) {
    setSelectedQuestionIndex(index);
    setIsVisible(false); // Hide the answer
    setTimeout(() => {
      setIsVisible(true); // Show the answer with a delay to reset the transition
    }, 10);
  }

  function handleSelectQuestionMobile(index) {
    // Toggle the visibility of the answer for the clicked question
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setSelectedQuestionIndex(index);
    setIsVisible(updatedVisibility);
  }

  return (
    <section className="homepage-faqs mx-6 sm:mx-8 mb-10 sm:mb-20">
      <div className="title-wrapper mb-8 text-center sm:text-left">
        <h1>FAQs</h1>
        <p className="mt-1">
          Don’t see your question here?{" "}
          <a href="/" className="link">
            Browse all
          </a>
        </p>
      </div>

      {/* Desktop screens */}
      <div className="desktop-faqs-wrapper hidden w-full sm:flex flex-row">
        <div className="questions-container w-1/2 border-r-2">
          {qaPairs.map((qaPair, index) => (
            <div
              key={index}
              className={`my-2 pr-4 cursor-pointer transition-color duration-100 ease ${
                selectedQuestionIndex === index
                  ? "text-primary"
                  : "text-blue-300 hover:text-primary"
              }`}
              onClick={() => handleSelectQuestionDesktop(index)}
            >
              <h4>{qaPair.question}</h4>
            </div>
          ))}
        </div>

        <div className="answers-container w-1/2 ml-8 flex justify-start items-center">
          {selectedQuestionIndex !== null && (
            <div className={`transform ${isVisible ? "animate-fade-in" : ""}`}>
              <p className="leading-7 text-lg">
                {qaPairs[selectedQuestionIndex].answer}
                {qaPairs[selectedQuestionIndex].link && (
                  <a
                    className="link"
                    href={qaPairs[selectedQuestionIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here.
                  </a>
                )}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile screens */}
      <div className="mobile-faqs-wrapper sm:hidden w-full block">
        <div className="questions-container w-full">
          {qaPairs.map((qaPair, index) => (
            <div
              key={index}
              className={`my-2 pr-4 cursor-pointer transition-color duration-100 ease border border-slate-700 px-4 py-2 rounded-md ${
                isVisible[index]
                  ? "text-primary"
                  : "text-blue-300 hover:text-primary"
              }`}
              onClick={() => handleSelectQuestionMobile(index)}
            >
              <h6>{qaPair.question}</h6>

              <div className="answers-container">
                {isVisible[index] && (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
