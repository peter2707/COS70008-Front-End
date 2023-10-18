import React, { useState } from "react";

const DemographicQuestionnaire = ({ isOpen, onClose, handleSubmit }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [hivStatus, setHIVStatus] = useState("");
  const [sexualOrientation, setSexualOrientation] = useState("");
  const [nationality, setNationality] = useState("");
  const [livingArea, setLivingArea] = useState("");

  return (
    <div
      className={`fixed inset-0 overflow-y-auto z-50 ${isOpen ? "" : "hidden"}`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Demographic Questionnaire
                </h3>
                <p className="text-sm text-gray-500">
                  This information is optional and will not be shared.
                </p>
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="hivStatus"
                    className="block text-sm font-medium text-gray-700"
                  >
                    HIV Status or History
                  </label>
                  <select
                    id="hivStatus"
                    name="hivStatus"
                    className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={hivStatus}
                    onChange={(e) => setHIVStatus(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="positive">HIV Positive</option>
                    <option value="negative">HIV Negative</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="sexualOrientation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sexual Orientation
                  </label>
                  <input
                    type="text"
                    name="sexualOrientation"
                    id="sexualOrientation"
                    className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={sexualOrientation}
                    onChange={(e) => setSexualOrientation(e.target.value)}
                  />
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="nationality"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nationality
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    id="nationality"
                    className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  />
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="livingArea"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Current Living Area in Australia
                  </label>
                  <select
                    id="livingArea"
                    name="livingArea"
                    className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={livingArea}
                    onChange={(e) => setLivingArea(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="New South Wales">New South Wales</option>
                    <option value="Victoria">Victoria</option>
                    <option value="Queensland">Queensland</option>
                    <option value="Western Australia">Western Australia</option>
                    <option value="South Australia">South Australia</option>
                    <option value="Tasmania">Tasmania</option>
                    <option value="Australian Capital Territory">
                      Australian Capital Territory
                    </option>
                    <option value="Northern Territory">
                      Northern Territory
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
            <button
              type="button"
              className="w-full mb-4 sm:mb-0 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-primary hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>

            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicQuestionnaire;
