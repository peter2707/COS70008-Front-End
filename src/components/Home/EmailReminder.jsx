import React from "react";
import { HiBell } from "react-icons/hi";

export default function EmailReminder() {
  return (
    <section className="email-reminder mx-6 sm:mx-8 mb-10 sm:mb-20">
      <div className="email-reminder-container flex flex-row-reverse justify-start sm:flex-row sm:justify-between items-start sm:items-center bg-primaryLight p-8 rounded-2xl">
        <div className="content-wrapper w-full sm:w-2/4">
          <h1 className="text-primary text-3xl md:text-5xl mb-2">
            Be proactive!
          </h1>
          <p className="text-slate-500 md:leading-8 text-sm md:text-xl mb-4 md:mb-8">
            Sign in and set up reminder to receive a monthly notification to
            stay on track with regular testing for a healthier you.
          </p>

          <div className="flex justify-end items-center sm:justify-start">
            <button className="notify-btn flex flex-row justify-center items-center text-sm sm:text-base bg-white text-primary border-2 border-primary rounded-full py-2 px-4">
              Get notify
              <HiBell className="rotate-12 ml-1" />
            </button>
          </div>
        </div>
        <div className="img-container w-32 md:w-48 mb-2 mr-4 sm:mr-0 sm:mb-0">
          <img
            className="w-full"
            src="assets/images/notification-bell-calendar.svg"
            alt="notification-bell-calendar"
          />
        </div>
      </div>
    </section>
  );
}
