import React from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <section className="section-container">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="path-to-your-logo.png" alt="Logo" />
        </div>

        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/learn">Learn</a>
          <a href="/support">Support</a>
          <a href="/admin">Admin</a>
        </div>

        <div className="navbar-profile">
          <a href="/profile">Profile</a>
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;
