import React, { useState } from "react";
import { isAuthenticated } from "../../utils/isAuthenticated";
import DemographicQuestionnaire from "../DemographicQuestionnaire";
import PleaseLoginModal from "../PleaseLoginModal";

export default function CommunityParticipation() {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());
  const [showPleaseLoginModal, setShowPleaseLoginModal] = useState(false);
  const [showDemographicQuestionnaire, setShowDemographicQuestionnaire] =
    useState(false);

  function handleSubmitQuestionnaire() {
    setShowDemographicQuestionnaire(false);
    console.log("form submitted");
  }

  function handleGetStarted() {
    if (authenticated) {
      setShowDemographicQuestionnaire(true);
      setShowPleaseLoginModal(false);
    } else {
      setShowDemographicQuestionnaire(false);
      setShowPleaseLoginModal(true);
    }
  }

  return (
    <section className="community-participation mx-6 sm:mx-8 mb-10 sm:mb-20">
      <div className="cp-content-container w-full flex flex-row">
        <div className="relative cp-content-left bg-community-participation bg-cover bg-center sm:bg-none sm:bg-darkBlue w-full sm:w-3/4 p-8 flex-grow rounded-2xl sm:rounded-r-none sm:rounded-l-2xl">
          <div className="absolute inset-0 backdrop-blur-sm sm:backdrop-blur-0 rounded-2xl"></div>
          <div className="relative cp-text-wrapper text-white">
            <h4 className="text-white font-extrabold mb-12">
              Community Participation
            </h4>
            <h1 className="text-lightPurple">Shape a Healthier Future</h1>
            <h1 className="mb-8">
              Participate in Our HIV Awareness Questionnaire.
            </h1>

            <p className="font-medium mb-16">
              Join hands in strengthening HIV awareness and understanding. Your
              participation in our questionnaire helps drive positive change and
              equips communities with vital insights.
            </p>

            <ul className="cp-list-items mb-8">
              <h5 className="mb-2">Why Your Voice Matters?</h5>
              <div className="cp-items ml-7">
                <li className="list-disc my-4">
                  <p>
                    Your input guides awareness efforts, reduces stigma, and
                    spreads understanding.
                  </p>
                </li>
                <li className="list-disc my-4">
                  <p>
                    Your data helps us to identify high risk areas, HIV
                    demographics, and enhances our HIV support and services.
                  </p>
                </li>
                <li className="list-disc my-4">
                  <p>Sharing empowers and supports those on similar paths.</p>
                </li>
              </div>
            </ul>

            <button
              type="button"
              className="text-darkBlue bg-white py-3 px-6 rounded-full mr-4 hover-bg-blue-100"
              onClick={handleGetStarted}
            >
              Get started
            </button>
          </div>
        </div>

        {showPleaseLoginModal && !authenticated && (
          <PleaseLoginModal
            isOpen={showPleaseLoginModal}
            onClose={() => setShowPleaseLoginModal(false)}
          />
        )}
        {showDemographicQuestionnaire && authenticated && (
          <DemographicQuestionnaire
            isOpen={showDemographicQuestionnaire}
            handleSubmit={handleSubmitQuestionnaire}
            onClose={() => setShowDemographicQuestionnaire(false)}
          />
        )}

        <div className="hidden sm:flex cp-content-right w-1/3 lg:w-2/4">
          <div className="bg-community-participation bg-cover bg-center w-full rounded-e-2xl"></div>
        </div>
      </div>
    </section>
  );
}
