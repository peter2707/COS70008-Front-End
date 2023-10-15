import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const TestkitInstructionModal = ({
  showModal,
  closeModal,
  data,
  onNext,
  onPrev,
  currentStep,
  totalSteps,
}) => {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto bg-gray-500/20 backdrop-blur-sm ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div className="w-full mx-auto md:w-1/2 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg p-4 w-full min-w-fit h-auto text-center rounded-lg mx-8">
          <button
            onClick={closeModal}
            className="w-full flex items-center justify-end text-gray-500 hover:text-gray-700"
          >
            <div className="flex justify-center items-center rounded-sm bg-gray-100 hover:bg-gray-200 w-8 h-8">
              <MdClose />
            </div>
          </button>
          <h2 className="text-2xl font-bold mb-2">{data.heading}</h2>
          {data.important !== undefined && (
            <div className="block">
              <p className="mb-4 text-red-500 text-xs font-medium">
                <IoWarningOutline className="w-full text-3xl text-red-500 text-center mb-2" />{" "}
                {data.important}
              </p>
            </div>
          )}

          <img
            src={data.image}
            alt={data.heading}
            className="w-full object-contain h-64 mb-4"
          />
          <p className="mb-4">{data.description}</p>
          <div className="flex justify-between">
            <button
              onClick={onPrev}
              className={`${
                isFirstStep
                  ? "bg-gray-200 text-gray-500"
                  : "bg-primaryLight text-primary hover:bg-primary hover:text-white transition-colors duration-75"
              } text-sm px-4 py-2 rounded-md`}
              disabled={isFirstStep}
            >
              Previous
            </button>
            <button
              onClick={onNext}
              className={`${
                isLastStep
                  ? "bg-gray-200 text-gray-500"
                  : "bg-primaryLight text-primary hover:bg-primary hover:text-white transition-colors duration-75"
              } text-sm px-4 py-2 rounded-md`}
              disabled={isLastStep}
            >
              Next
            </button>
          </div>
          <div className="mt-4">
            <span className="text-gray-600">{data.pagination}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestkitInstructionModal;
