import React from "react";
import "./Home.css";
import HomepageHero from "./HomepageHero";
import ExploreCategories from "./ExploreCategories";
import TestkitPurchase from "./TestkitPurchase";
import CommunityParticipation from "./CommunityParticipation";
import FAQs from "./FAQs";

const Home = () => {
    return (
        <div className="w-full lg:max-w-screen-2xl mx-auto mt-24">
            <HomepageHero />
            <ExploreCategories />
            <TestkitPurchase />
            <CommunityParticipation />
            <FAQs />

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
