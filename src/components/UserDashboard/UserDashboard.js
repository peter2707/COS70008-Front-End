import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLink, FaPen } from "react-icons/fa6";
import "./UserDashboard.css";

const UserDashboard = () => {
    const [userData, setUserData] = useState({});
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch user details
        axios
            .get("/api/user-details")
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user details:", error);
            });

        // Fetch articles (assuming the backend returns an array of articles)
        axios
            .get("/api/user-articles")
            .then((response) => {
                setArticles(response.data);
            })
            .catch((error) => {
                console.error("Error fetching articles:", error);
            });
    }, []);
    return (
        <div className="dashboard-container w-full lg:max-w-screen-2xl mx-auto mt-24">
            <div className="main-content">
                <div className="header-content">
                    <h1>Good Afternoon, {userData.name}</h1>
                    <p>{userData.date}</p>
                </div>
                <div className="record-section">
                    <h1 className="text-primary">Next Periodic Test</h1>
                    <h3>{userData.nextTestDate}</h3>
                    <br />
                    <p>Last Recorded Test</p>
                    <p>
                        {userData.lastTestDate} | {userData.lastTestResult}
                    </p>
                    <br />
                    <button className="add-record-btn">Add Record</button>
                    <button className="download-record-btn">
                        Download Record
                    </button>
                </div>
                <div className="shortcut-section">
                    <button className="expand-all-btn">Expand All</button>
                    <h2>Your Shortcuts</h2>
                    <p>Topics you bookmarked from Learn will display here</p>

                    <div className="articles">
                        {articles.map((article, index) => (
                            <div key={index} className="article-card">
                                <h5>{article.title}</h5>
                                <p>{article.content}</p>
                                <button className="learn-more-btn">
                                    Learn More
                                </button>
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
                <button className="set-email-btn"><FaPen /></button>
                    <h6>Email Notification</h6>
                    <p>Every 3 months</p>
                </div>
                <br />
                <hr />
                <br />
                <div className="get-testkit-section">
                    <h6>Get HIV self-testing kit</h6>
                    <a
                        href="https://atomohivtest.com/home.php"
                        className="purchase-link"
                    >
                        Purchase test kit <FaLink />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
