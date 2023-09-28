import React from 'react'
import SupportHero from './SupportHero';
import PostTestingGuidance from './PostTestingGuidance/PostTestingGuidance';
import CommunityParticipationSupport from './CommunityParticipationSupport';

const Support = () => {
    return (
        <div className="w-full lg:max-w-screen-2xl mx-auto mt-24">
            <SupportHero />
            <PostTestingGuidance />
            <CommunityParticipationSupport />
        </div>
    );
};

export default Support;