import React from "react";
import { Link } from "react-router-dom";

export default function HomepageHero() {
  return (
    <section className="hero mx-6 sm:mx-8 mb-10 sm:mb-20">
      <div className="w-full flex flex-wrap justify-center items-start py-24 sm:justify-between md:flex-nowrap">
        <div className="hero-left flex flex-col justify-center items-center w-full md:justify-between md:items-start md:w-1/2 h-full">
          <div className="title-wrapper text-center w-full sm:text-left">
            <h1 className="title">Understand, Prevent and Thrive</h1>
            <p className="subtitle mt-8">
              Stay updated with testing history, manage reminders, and connect
              with a supportive community for shared experiences.
            </p>
          </div>
          <Link to="/login" className="py-3 px-8 mt-8 rounded-full bg-primary text-white font-bold">
            Login now
          </Link>
          
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
