import React from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
    return (
        <div className="dashboard-container w-full lg:max-w-screen-2xl mx-auto">
            <div className="main-content">
                <div className="record-section">
                    <h1 className="text-primary">Next Periodic Test</h1>
                    <h3>Secondary Subtitle</h3>
                    <p>Some text here</p>
                    <button className="primary-btn">Primary Button</button>
                    <button className="outline-btn">Outline Button</button>
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
