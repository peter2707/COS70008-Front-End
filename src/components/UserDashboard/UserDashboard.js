import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLink, FaPen, FaCircleXmark } from "react-icons/fa6";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [username, setUsername] = useState();

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

  useEffect(() => {
    setUsername(localStorage.getItem("name"));
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
            {getGreeting()}, {username}
          </h1>
          <p>{date()}</p>
        </div>
        <div className="record-section">
          <h1 className="text-primary">Next Periodic Test</h1>
          <h3>12th December</h3>
          <br />
          <p>Last Recorded Test</p>
          <p>12th June | Negative</p>
          <br />
          <button className="add-record-btn" onClick={() => setShowModal(true)}>
            Add Record
          </button>
          <button className="download-record-btn">Download Record</button>
          {showModal && (
            <div className="modal-bg">
              <div className="modal-content">
                <button className="modal-close-btn" onClick={handleCloseModal}>
                  <FaCircleXmark />
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
                      <input
                        type="checkbox"
                        id="terms"
                        checked={acceptedTerms}
                        onChange={() => setAcceptedTerms(!acceptedTerms)}
                      />
                      <label htmlFor="terms">
                        I accept the <a href="#term">terms and conditions</a>{" "}
                        and <a href="#privacy">privacy policy</a>.
                      </label>
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
          <button className="expand-all-btn">Expand All</button>
          <h2>Your Shortcuts</h2>
          <p>Topics you bookmarked from Learn will display here</p>
          <div className="articles">
            {/* {articles.map((article, index) => (
              <div key={index} className="article-card">
                <h5>{article.title}</h5>
                <p>{article.content}</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            ))} */}
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
