import React from "react";
import "./Home.css";
import HomepageHero from "./HomepageHero";
import ExploreCategories from "./ExploreCategories";
import TestkitPurchase from "./TestkitPurchase";

const Home = () => {
    return (
        <div className="w-full lg:max-w-screen-2xl mx-auto mt-24">
            <HomepageHero />
            <ExploreCategories />
            <TestkitPurchase />

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
