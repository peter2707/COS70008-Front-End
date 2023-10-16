import React from "react";
import { Link } from "react-router-dom";

export default function ExploreCategories() {
  const cardColors = [
    "bg-lightRed",
    "bg-lightYellow",
    "bg-lightGreen",
    "bg-lightPink",
  ];

  const categories = [
    {
      title: "Understanding HIV",
      description:
        "We break down the facts in a simple, accessible way, ensuring you have a clear understanding of the virus and its implications.",
    },
    {
      title: "Information about STI's",
      description:
        "Learn about effective prevention strategies, from safe practices to pre-exposure prophylaxis (PrEP). Together, we can reduce new infections and create a healthier future.",
    },
    {
      title: "Living Well with HIV",
      description:
        "Explore stories of resilience, access information about treatments, and understand how medical advancements have transformed HIV into a manageable condition.",
    },
    {
      title: "Support and Community",
      description:
        "Discover resources for emotional support, find local organisations, and connect with a community that understands and uplifts each other.",
    },
  ];

  return (
    <section className="explore-categories mx-6 sm:mx-8 mb-10 sm:mb-20">
      <div className="section-container">
        <div className="header-wrapper">
          <h1 className="leading-none">Explore Articles by Category</h1>
          <p className="mt-3 text-gray-600">
            Looking for more topics?{" "}
            <a
              href="/learn"
              className="text-primary underline cursor-pointer hover:text-blue-800"
            >
              Browse all
            </a>
          </p>
        </div>
        <div className="category-cards-wrapper w-full grid grid-cols-1 gap-4 md:gap-8 mt-10 md:grid-cols-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`w-full h-72 flex flex-col justify-between mx-auto ${
                cardColors[index % cardColors.length]
              } text-black rounded-2xl p-8`}
            >
              <div className="card-header-wrapper text-left">
                <h3 className="text-primary">{category.title}</h3>
                <p className="text-lg">{category.description}</p>
              </div>
              <div className="btn-container text-right">
                <button className="py-2 px-3 bg-gray-800 text-white font-semibold rounded-lg">
                  <Link to="/learn">Learn More</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
