import React from "react";

export default function CommunityParticipationSupport() {
  return (
    <section className="cp-usp-support mx-6 sm:mx-8 mb-10 sm:mb-20">
      <div className="header-wrapper mb-6">
        <h1>Participate in Our HIV Awareness Questionnaire</h1>
        <p>
          Join hands in strengthening HIV awareness and support the community.
        </p>
      </div>

      <div className="why-your-voice-matter w-full flex flex-col-reverse sm:flex-row md:justify-between items-center md:items-start bg-lightGreen p-6 rounded-xl">
        <div className="content-wrapper">
          <div className="mb-8 mt-4 sm:mt-0">
            <h5 className="text-center sm:text-left">Why Your Voice Matters?</h5>
            <ul className="list-items ml-8">
              <li className="list-item list-disc mt-2">
                Your input guides awareness efforts, reduces stigma, and spreads
                understanding.
              </li>
              <li className="list-item list-disc mt-2">
                Your data helps us to identify high risk area, HIV demographic
                and to enhance our HIV support and services.
              </li>
              <li className="list-item list-disc mt-2">
                Sharing empowers and supports those on similar paths.
              </li>
            </ul>
          </div>

          <button className="text-base bg-white text-slate-900 rounded-full py-2 px-6 hover:bg-green-300 hover:text-white">
            Join now
          </button>
        </div>

        <img
          className="w-44 h-44 md:w-56 md:h-56"
          src="/assets/images/hands-holding-a-heart.png"
          alt="Hands holding a heart"
        />
      </div>
    </section>
  );
}
