import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLink, FaPen, FaCircleXmark } from "react-icons/fa6";
import { HiCalendar, HiBookmark } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./UserDashboard.css";

const UserDashboard = () => {
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

  return (
    <div className="dashboard-container w-full lg:max-w-screen-2xl mx-auto mt-24">
      <div className="main-content">
        <div className="header-content">
          <h1>
            {getGreeting()}, {userData.name}
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
      <div className="sidebar">
        <div className="community-section">
          <h6>Community Participation</h6>
          <p>Answer HIV questionaires</p>
          <button className="answer-community-qa-btn">Start</button>
        </div>
        <div className="email-notification-section">
          <button className="set-email-btn">
            <FaPen />
          </button>
          <h6>Email Notification</h6>
          <p>Every 3 months</p>
        </div>
        <br />
        <hr />
        <br />
        <div className="get-testkit-section">
          <h6>Get HIV self-testing kit</h6>
          <a href="https://atomohivtest.com/home.php" className="purchase-link">
            Purchase test kit <FaLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
