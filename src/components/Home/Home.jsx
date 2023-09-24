import React from "react";
import "./Home.css";
import HomepageHero from "./HomepageHero";
import ExploreCategories from "./ExploreCategories";
import TestkitPurchase from "./TestkitPurchase";
import CommunityParticipation from "./CommunityParticipation";
import FAQs from "./FAQs";
import EmailReminder from "./EmailReminder";

const Home = () => {
    return (
        <div className="w-full lg:max-w-screen-2xl mx-auto mt-24">
            <HomepageHero />
            <ExploreCategories />
            <TestkitPurchase />
            <CommunityParticipation />
            <FAQs />
            <EmailReminder />
        </div>
    );
};

export default Home;
