import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <a href="/">
                        <img src="path-to-your-logo.png" alt="Logo" />
                    </a>
                </div>

                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/terms">Terms of Service</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/contact">Contact</a>
                    <a href="/faq">FAQ</a>
                </div>
            </div>

            <div className="footer-copy">
                &copy; {new Date().getFullYear()} HIV Self-Test. All Rights
                Reserved.
            </div>
        </div>
    );
};

export default Footer;
