import React from "react";
import { IoWarningOutline } from "react-icons/io5";

const TestkitInstructionModal = ({
  showModal,
  closeModal,
  data,
  onNext,
  onPrev,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto bg-gray-500/20 backdrop-blur-sm ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg p-4 w-full min-w-fit mx-8 md:w-2/3 md:mx-auto text-center rounded-lg">
          <button
            onClick={closeModal}
            className="w-full flex items-center justify-end text-gray-500 hover:text-gray-700"
          >
            Close
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
            className="w-full object-contain h-64  mb-4"
          />
          <p className="mb-4">{data.description}</p>
          <div className="flex justify-between">
            <button
              onClick={onPrev}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Go Back
            </button>
            <button
              onClick={onNext}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
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
