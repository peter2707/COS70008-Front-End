import React, { useState } from "react";
import TestkitInstructionModal from "../TestkitInstructionModal";
import steps from "../testkitSteps"

export default function TestkitPurchase() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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
