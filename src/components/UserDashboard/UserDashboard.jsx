import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLink, FaPen } from "react-icons/fa6";
import { HiCalendar, HiBookmark } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./UserDashboard.css";
import DemographicQuestionnaire from "../DemographicQuestionnaire";
import TestkitInstructionModal from "../TestkitInstructionModal";
import steps from "../testkitSteps.js";

const UserDashboard = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    nextTestReminder: Date,
    prevTestResult: {
      dateRecorded: "",
      result: "",
    },
    savedShortcuts: [],
  });

  const [showModal, setShowModal] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    testTaken: "",
    testDate: "",
    testResult: "",
    testImage: null,
  });
  const [showDemographicQuestionnaire, setShowDemographicQuestionnaire] =
    useState(false);
  const [showTestkitInstructionModal, setShowTestkitInstructionModal] =
    useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = () => setShowTestkitInstructionModal(true);
  const closeModal = () => {
    setCurrentIndex(0);
    setShowTestkitInstructionModal(false);
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
  // Generate formatted date
  const date = () => {
    const today = new Date();
    const options = { weekday: "long", day: "numeric", month: "long" };
    const day = today.getDate();

    let dayString = day.toString();

    if (day >= 11 && day <= 13) {
      dayString += "th";
    } else {
      const lastDigit = day % 10;
      const suffixes = ["th", "st", "nd", "rd"];
      dayString += suffixes[lastDigit] || "th";
    }

    const formattedDate = today.toLocaleDateString(undefined, options);
    return formattedDate.replace(day, dayString);
  };

  // Function to format Unix timestamp to a human-readable date
  function formatUnixTimestamp(timestamp) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  async function getUserData() {
    try {
      const response = await axios.get(
        "https://652f221c0b8d8ddac0b23934.mockapi.io/userData"
      );

      const data = response.data[0];

      setUserData({
        name: data.username,
        nextTestReminder: formatUnixTimestamp(data.nextTestReminder),
        prevTestResult: {
          dateRecorded: data.prevTestResult.dateRecorded,
          result: data.prevTestResult.result,
        },
        savedShortcuts: data.savedShortcuts,
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  useEffect(() => {
    setUsername(localStorage.getItem("name"));
    getUserData();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      testTaken: "",
      testDate: "",
      testResult: "",
      testImage: null,
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit formData here
    handleCloseModal();
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) return "Good Morning";
    if (currentHour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  function handleSubmitQuestionnaire() {
    setShowDemographicQuestionnaire(false);
    console.log("form submitted");
  }

  return (
    <div className="dashboard-container w-full lg:max-w-screen-2xl mx-auto mt-24">
      <div className="main-content relative top-36 md:top-0">
        <div className="header-content">
          <h1>
            {getGreeting()}, {username}
          </h1>
          <p className="text-lg">{date()}</p>
        </div>
        <div className="record-section">
          <div className="flex flex-col justify-center items-start">
            <HiCalendar className="text-primary h-12 w-12 mr-2 -mt-2" />
            <h1 className="text-primary">Next periodic test</h1>
            <p className="text-xl">{userData.nextTestReminder}</p>
          </div>

          <div className="previous-record py-8">
            <p className="text-primary">Previous recorded test</p>
            <p>
              <span className="text-gray-500">
                {userData.prevTestResult.dateRecorded}
              </span>{" "}
              |{" "}
              <span className="text-green-500">
                {userData.prevTestResult.result}
              </span>
            </p>
          </div>

          <button
            className="bg-primary text-base text-white p-2 rounded-md mr-4 mb-4 md:mb-0"
            onClick={() => setShowModal(true)}
          >
            Add Record
          </button>
          <button className="bg-white text-base text-primary p-2 rounded-md border border-primary">
            Download Record
          </button>
          {showModal && (
            <div className="modal-bg">
              <div className="modal-content">
                <button
                  className="w-full flex justify-end"
                  onClick={handleCloseModal}
                >
                  <IoClose className="bg-gray-100 w-fit h-8 rounded-md hover:bg-red-400 hover:text-white transition-colors duration-75" />
                </button>
                <h4>Add Your Test Record</h4>
                <hr />
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="form-question">
                    <label>Did you take the test? </label>
                    <select
                      value={formData.testTaken}
                      onChange={(e) =>
                        handleInputChange("testTaken", e.target.value)
                      }
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  {formData.testTaken === "yes" && (
                    <div className="form-question">
                      <label>Date of Test: </label>
                      <input
                        type="date"
                        value={formData.testDate}
                        onChange={(e) =>
                          handleInputChange("testDate", e.target.value)
                        }
                      />
                    </div>
                  )}

                  {formData.testDate && (
                    <div className="form-question">
                      <label>Test Result: </label>
                      <select
                        value={formData.testResult}
                        onChange={(e) =>
                          handleInputChange("testResult", e.target.value)
                        }
                      >
                        <option value="">Select</option>
                        <option value="positive">Positive</option>
                        <option value="negative">Negative</option>
                      </select>
                    </div>
                  )}

                  {formData.testResult && (
                    <div className="form-question">
                      <label>Upload Image of Test Result: </label>
                      <input
                        type="file"
                        onChange={(e) =>
                          handleInputChange("testImage", e.target.files[0])
                        }
                      />
                    </div>
                  )}

                  {formData.testImage && (
                    <div className="form-question">
                      <div className="flex flex-wrap justify-start items-center">
                        <input
                          type="checkbox"
                          id="terms"
                          checked={acceptedTerms}
                          className="w-8 h-8 cursor-pointer"
                          onChange={() => setAcceptedTerms(!acceptedTerms)}
                        />
                        <label htmlFor="terms">
                          I accept the <a href="#term">terms and conditions</a>{" "}
                          and <a href="#privacy">privacy policy</a>.
                        </label>
                      </div>

                      <br />
                      <button
                        className="submit-btn"
                        type="submit"
                        disabled={!acceptedTerms}
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="shortcut-section">
          <h2>Your shortcuts</h2>
          <p>Topics you bookmarked from Learn will display here</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
            {userData.savedShortcuts.map((subtopic, index) => (
              <div key={index} className="h-52 bg-primary p-4 rounded-lg">
                <div className="flex flex-row justify-between items-center">
                  <h5 className="text-white mb-0">{subtopic.title}</h5>
                  <HiBookmark className="text-white h-6 w-6" />
                </div>

                <div className="flex flex-col h-fit justify-between items-between">
                  <p className="text-white my-4 line-clamp-3">
                    {subtopic.description}
                  </p>
                  <div className="flex flex-row justify-end">
                    <Link
                      className="w-fit bg-white text-primary font-medium rounded-md p-2"
                      to={subtopic.articleLink}
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Sidebar - Desktop */}
      <div className="sidebar-desktop w-1/5 min-w-fit bg-gray-50 p-4 rounded-xl mt-8 hidden md:block">
        <div className="community-section">
          <h6>Community Participation</h6>
          <p>Answer HIV questionaires</p>
          <button
            className="answer-community-qa-btn"
            onClick={() => setShowDemographicQuestionnaire(true)}
          >
            Start
          </button>
        </div>
        <div className="email-notification-section">
          <button className="set-email-btn">
            <FaPen />
          </button>
          <h6>Email Notification</h6>
          <p>Every 3 months</p>
        </div>
        <hr className="my-8" />
        <div className="get-testkit-section">
          <h6>Get HIV self-testing kit</h6>
          <div className="flex flex-row flex-wrap justify-between items-center">
            <a
              href="https://atomohivtest.com/home.php"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex flex-nowrap justify-start items-center">Buy test kit <FaLink className="ml-2" /></span>
            </a>
            <button
              className="bg-white text-sm text-primary border border-primary p-2 rounded-full"
              onClick={openModal}
            >
              Instruction
            </button>
          </div>

          <TestkitInstructionModal
            showModal={showTestkitInstructionModal}
            closeModal={closeModal}
            data={steps[currentIndex]}
            currentStep={currentIndex}
            onNext={onNext}
            onPrev={onPrev}
            totalSteps={steps.length}
          />
        </div>
      </div>
      {showDemographicQuestionnaire && (
        <DemographicQuestionnaire
          isOpen={showDemographicQuestionnaire}
          handleSubmit={handleSubmitQuestionnaire}
          onClose={() => setShowDemographicQuestionnaire(false)}
        />
      )}

      {/* Sidebar - Mobile */}
      <div className="sidebar-mobile bg-white w-full fixed top-24 pt-6 pb-2 flex flex-row justify-start items-center md:hidden">
        <div className="flex flex-row-reverse overflow-x-scroll gap-4">
          <div className="community-card flex flex-row items-center w-fit bg-lightRed text-primaryRed p-2 rounded-md">
            <div>
              <h6 className="text-sm">Community Participation</h6>
              <p className="text-xs text-gray-500 mt-2">
                Answer HIV questionaires
              </p>
            </div>

            <button
              className="w-fit h-fit bg-white border border-primaryRed p-0 text-xs rounded-full ml-4"
              onClick={() => setShowDemographicQuestionnaire(true)}
            >
              Start
            </button>
          </div>
          <div className="email-notification-card flex flex-row items-center w-fit bg-lightGreen text-primaryGreen p-2 rounded-md">
            <div>
              <h6 className="text-sm">Email Notification</h6>
              <p className="text-xs text-gray-500 mt-2">Every 3 months</p>
            </div>
            <button className="set-email-btn ml-4">
              <FaPen />
            </button>
          </div>

          <div className="get-testkit-card flex flex-col items-start w-fit bg-primaryLight text-primary p-2 rounded-md">
          <h6 className="text-sm">Get HIV self-testing kit</h6>
          <div className="flex flex-row flex-wrap justify-between items-center mt-2">
            <a
              href="https://atomohivtest.com/home.php"
              className="link text-sm mr-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Purchase test kit <FaLink />
            </a>
            <button
              className="text-xs bg-white text-primary border border-primary p-2 rounded-full"
              onClick={openModal}
            >
              Instruction
            </button>
          </div>

          <TestkitInstructionModal
            showModal={showTestkitInstructionModal}
            closeModal={closeModal}
            data={steps[currentIndex]}
            currentStep={currentIndex}
            onNext={onNext}
            onPrev={onPrev}
            totalSteps={steps.length}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
