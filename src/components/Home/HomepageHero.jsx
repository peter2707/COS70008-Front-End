import React from "react";

export default function HomepageHero() {
  return (
    <section className="w-full lg:max-w-6xl mx-auto mt-24">
      <div className="w-full flex flex-wrap justify-center items-start py-24 mx-4 sm:justify-between md:flex-nowrap sm:mx-8">
        <div className="hero-left flex flex-col justify-center items-center w-full md:justify-between md:items-start md:w-1/2 h-full">
          <div className="title-wrapper text-center w-full sm:text-left">
            <h1 className="title">Understand, Prevent and Thrive</h1>
            <p className="subtitle mt-8">
              Stay updated with testing history, manage reminders, and connect
              with a supportive community for shared experiences.
            </p>
          </div>
          <button className="py-3 px-8 mt-8 rounded-full bg-blue-600 text-white">
            Login now
          </button>
        </div>
        <div className="hero-right w-full sm:max-w-lg mt-8 lg:mt-0 mx-auto">
          <img
            className="w-3/4 sm:w-full mx-auto"
            src="/assets/images/homepage-hero-img.svg"
            alt="supportive people and community"
          />
        </div>
      </div>
    </section>
  );
}
