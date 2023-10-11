import React from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
    return (
        <div className="dashboard-container w-full lg:max-w-screen-2xl mx-auto">
            <div className="main-content">
                <div className="header-content">
                    <h1>Good Afternoon, Jason</h1>
                    <p>Wednesday, 30th August</p>
                </div>
                <div className="record-section">
                    <h1 className="text-primary">Next Periodic Test</h1>
                    <h3>12th December</h3>
                    <br />
                    <p>Last Recorded Test</p>
                    <p>12th June | Negative</p>
                    <br />
                    <button className="primary-btn">Add Record</button>
                    <button className="outline-btn">Download Record</button>
                </div>
                <div className="shortcut-section">
                    <h2>Title</h2>
                    <h4>Subtitle</h4>
                    <button className="expand-all-btn">Expand All</button>
                    <div className="articles">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="article-card">
                                <h5>Article Title {index + 1}</h5>
                                <p>
                                    The distinction between HIV and AIDS and how
                                    HIV weakens the immune system and can
                                    progress to AIDS.
                                </p>
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
                    <button>Start</button>
                </div>
                <div className="email-notification-section">
                    <h6>Email Notification</h6>
                    <p>Every 3 months</p>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
