import React from 'react'
import SupportHero from './SupportHero';
import PostTestingGuidance from './PostTestingGuidance/PostTestingGuidance';
import CommunityParticipationSupport from './CommunityParticipationSupport';
import Hotlines from './Hotlines';
import SupportFaqs from './SupportFaqs';

const Support = () => {
    return (
        <div className="w-full lg:max-w-screen-2xl mx-auto mt-24">
            <SupportHero />
            <PostTestingGuidance />
            <CommunityParticipationSupport />
            <Hotlines />
            <SupportFaqs />
        </div>
    );
};

export default Support;