import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-headline">Your Headline Here</h1>
                    <p className="hero-description">
                        Your description goes here. Describe what makes your
                        product or service unique and why visitors should be
                        interested.
                    </p>
                    <button className="hero-button">Learn More</button>
                </div>
            </section>

            {/* 1st Section: Explore Articles by Category */}
            <section className="articles-section">
                <h2>Explore Articles by Category</h2>
                <div className="articles-grid">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="article-card">
                            <h3>Article {index + 1} Title</h3>
                            <p>Article {index + 1} description...</p>
                            <button>Learn More</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2nd Section: About the Product */}
            <section className="product-section">
                <div className="product-content">
                    <h2>Product Title</h2>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button>Buy Now</button>
                </div>
                <img src="path-to-product-image.jpg" alt="Product" />
            </section>

            {/* 3rd Section: Community */}
            <section className="community-section">
                <img src="path-to-community-image.jpg" alt="Community" />
                <div className="community-content">
                    <h2>Our Community</h2>
                    <h3>Subheadline about community</h3>
                    <p>Description about the community...</p>
                    <button>Learn More</button>
                </div>
            </section>

            {/* 4th Section: FAQs */}
            <section className="faqs-section">
                <div className="faqs-content">
                    <h2>Frequently Asked Questions</h2>
                    <a href="/faqs">See all FAQs</a>
                    <h3>Most Common Question</h3>
                    <p>Answer to the most common question...</p>
                </div>
            </section>

            {/* 5th Section: Email Notification */}
            <section className="email-section">
                <h2>Email Notifications</h2>
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </form>
            </section>
        </div>
    );
};

export default Home;
