import React from "react";

export default function SupportHero() {
  return (
    <section className="hero mx-6 sm:mx-8 mb-10 sm:mb-20">
      <div className="w-full flex flex-wrap justify-center items-start py-24 sm:justify-between md:flex-nowrap">
        <div className="hero-left flex flex-col justify-center items-center w-full md:justify-between md:items-start md:w-1/2 h-full">
          <div className="title-wrapper text-center w-full sm:text-left">
            <h1 className="title">Received your test results?</h1>
            <p className="subtitle mt-8 lg:w-3/4 mb-4">
              We understand that dealing with HIV can be challenging, and having
              access to support services is crucial for your well-being.
            </p>
            <p className="text-primary lg:w-3/4">Explore available support services offering assistance, guidance, and care on this page.</p>
          </div>
        </div>
        <div className="hero-right w-full sm:max-w-lg mt-8 lg:mt-0 mx-auto">
          <img
            className="w-3/4 sm:w-full mx-auto"
            src="/assets/images/community-connection.svg"
            alt="supportive people and community"
          />
        </div>
      </div>
    </section>
  );
}
