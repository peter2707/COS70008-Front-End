import React, { useState } from "react";
import TestkitInstructionModal from "../TestkitInstructionModal";

export default function TestkitPurchase() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const steps = [
    {
      heading: "Step 1",
      image: "/assets/images/testkit-steps/step1.png",
      description: "Make sure you have these items ready before continuing.",
      important:
        "Do not open the foil package until you have read the instructions and are ready to take the test. Use immediately upon opening.",
      pagination: "1 of 11",
    },
    {
      heading: "Step 2",
      image: "/assets/images/testkit-steps/step2.png",
      description: (
        <span>
          <strong>Wash</strong> and dry hands.{" "}
          <strong>Check expiry date</strong> before you open the foil pouch.
        </span>
      ),
      pagination: "2 of 11",
    },
    {
      heading: "Step 3",
      image: "/assets/images/testkit-steps/step3.png",
      description: (
        <span>
          <strong>Massage</strong> your finger 4 for 5 to 10 seconds.
        </span>
      ),
      pagination: "3 of 11",
    },
    {
      heading: "Step 4",
      image: "/assets/images/testkit-steps/step4.png",
      description: (
        <span>
          <strong>Gently turn</strong> and <strong>take out</strong> the green
          tab, then discard it.
        </span>
      ),
      pagination: "4 of 11",
    },
    {
      heading: "Step 5",
      image: "/assets/images/testkit-steps/step5.png",
      description: (
        <span>
          <strong>Push</strong> grey button in to <strong>prick finger.</strong>
        </span>
      ),
      pagination: "5 of 11",
    },
    {
      heading: "Step 6",
      image: "/assets/images/testkit-steps/step6.png",
      description: "Place test on instructions next to results.",
      pagination: "6 of 11",
    },
    {
      heading: "Step 7",
      image: "/assets/images/testkit-steps/step7.png",
      description: (
        <span>
          <strong>Squeeze firmly</strong> behind prick site to get blood.
        </span>
      ),
      pagination: "7 of 11",
    },
    {
      heading: "Step 8.1",
      image: "/assets/images/testkit-steps/step8.png",
      description: (
        <span>
          Hold test on table. <strong>Fill blood tube</strong> with blood. If
          blood tube isn’t full, <strong>squeeze finger</strong> and add more
          blood.
        </span>
      ),
      pagination: "8.1 of 11",
    },
    {
      heading: "Step 8.2",
      image: "/assets/images/testkit-steps/step9.png",
      description: "",
      pagination: "8.2 of 11",
    },
    {
      heading: "Step 9",
      image: "/assets/images/testkit-steps/step10.png",
      description: (
        <span>
          Hold test on table. Now <strong>flip blood tube over</strong> to the
          well.
        </span>
      ),
      important:
        "Check blood has moved from tube to well. If blood has not moved from tube to well, discontinue test and retest with another device.",
      pagination: "9 of 11",
    },
    {
      heading: "Step 10",
      image: "/assets/images/testkit-steps/step11.png",
      description: (
        <span>
          Add <strong>4 drops</strong> in the well.
        </span>
      ),
      pagination: "10 of 11",
    },
    {
      heading: "Step 11 (final step)",
      image: "/assets/images/testkit-steps/step12.png",
      description: (
        <span>
          Wait <strong>15 minutes</strong> before reading the result.{" "}
          <strong>Do not read the result after 20 minutes.</strong>
        </span>
      ),
      pagination: "11 of 11",
    },
  ];
  const openModal = () => setModalVisible(true);
  const closeModal = () => {
    setCurrentIndex(0);
    setModalVisible(false);
  };
  const onNext = () => {
    if (currentIndex < steps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <section className="testkit-purchase mx-6 sm:mx-8 mb-10 sm:mb-20">
      <div className="content-wrapper w-full flex flex-wrap justify-center items-start lg:justify-between lg:flex-nowrap lg:flex-cols-2 mx-auto">
        <div className="product-usp w-full text-left lg:w-3/4 md:mr-8">
          <h1 className="leading-none">
            Take control of your health, purchase the HIV test kit today
          </h1>
          <ul className="usp-list">
            <li className="usp-list-item">
              <img src="/assets/icons/verified.svg" alt="privacy and safe" />
              <div className="usp-description">
                <h6>Privacy and convenience</h6>
                <p>
                  Test at home, on your terms. No appointments needed. Your
                  health, your space.
                </p>
              </div>
            </li>
            <li>
              <div className="usp-list-item">
                <img src="/assets/icons/like.svg" alt="reliable" />
                <div className="usp-description">
                  <h6>Reliable result</h6>
                  <p>Peace of mind about your HIV status – accuracy assured.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="usp-list-item">
                <img src="/assets/icons/pharmacy.svg" alt="catch early" />
                <div className="usp-description">
                  <h6>Catch early - Timely detection matters</h6>
                  <p>
                    Helps you catch HIV early, manage with prompt intervention.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div className="buttons-container flex flex-row">
            <button className="w-fit h-auto bg-primary text-white py-3 px-6 rounded-full mr-4 hover:bg-blue-700">
              <a
                className="w-fit inline-flex items-center"
                href="https://atomohivtest.com/home.php"
                target="_blank"
                rel="noreferrer"
              >
                Buy Now
                <img
                  className="w-auto ml-3"
                  src="/assets/icons/open-link.svg"
                  alt="Open purchase link in new tap"
                />
              </a>
            </button>

            <button
              className="text-primary border-2 border-primary py-3 px-6 rounded-full mr-4  hover:border-blue-800"
              onClick={openModal}
            >
              Instruction
            </button>
            <TestkitInstructionModal
              showModal={modalVisible}
              closeModal={closeModal}
              data={steps[currentIndex]}
              currentStep={currentIndex}
              onNext={onNext}
              onPrev={onPrev}
              totalSteps={steps.length}
            />
          </div>
        </div>

        <div className="product-img w-full flex justify-center items-center p-10 bg-primaryLight rounded-2xl lg:w-2/4 mt-10 lg:mt-0">
          <img
            className="mt-4 w-full"
            src="/assets/images/testkit.png"
            alt="HIV self-testing kit"
          />
        </div>
      </div>
    </section>
  );
}
