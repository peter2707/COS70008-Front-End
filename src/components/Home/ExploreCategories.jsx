import React from "react";

export default function ExploreCategories() {
    const cardColors = ["bg-customRed", "bg-customYello", "bg-customGreen", "bg-customPink"];

  return (
    <section className="explore-categories mx-6 sm:mx-8">
      <div className="section-container">
        <div className="header-wrapper">
          <h1 className="leading-none">Explore Articles by Category</h1>
          <p className="mt-3 text-gray-600">
            Looking for more topics?{" "}
            <a
              href="/learn"
              className="text-primary underline cursor-pointer hover:text-blue-800">Browse all</a>
          </p>
        </div>
        <div className="category-cards-wrapper w-full grid grid-cols-1 gap-4 md:gap-8 mt-10 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`w-full h-72 flex flex-col justify-between mx-auto ${cardColors[index % cardColors.length]} text-black rounded-2xl p-8`}
            >
              <div className="card-header-wrapper text-left">
                <h3 className="text-primary">Article {index + 1} Title</h3>
                <p className="text-lg">Article {index + 1} description...</p>
              </div>
              <div className="btn-container text-right">
                <button className="py-2 px-3 bg-gray-800 text-white font-semibold rounded-lg ">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
