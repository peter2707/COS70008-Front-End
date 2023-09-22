import React from "react";

export default function TestkitPurchase() {
  return (
    <section className="testkit-purchase mx-6 sm:mx-8 mb-10 sm:mb-20">
      <div className="content-wrapper w-full flex flex-wrap justify-center items-start lg:justify-between lg:flex-nowrap lg:flex-cols-2 mx-auto">
        <div className="product-usp w-full text-left lg:w-3/4 md:mr-8">
          <h1 className="leading-none">
            Take control of your health, purchase the HIV test kit today
          </h1>
          <ul className="usp-list">
            <li className="usp-list-item">
              <img src="/assets/icons/verified.svg" alt="privacy and safe" />
              <div className="usp-description">
                <h6>Privacy and convenience</h6>
                <p>
                  Test at home, on your terms. No appointments needed. Your
                  health, your space.
                </p>
              </div>
            </li>
            <li>
              <div className="usp-list-item">
                <img src="/assets/icons/like.svg" alt="reliable" />
                <div className="usp-description">
                  <h6>Reliable result</h6>
                  <p>Peace of mind about your HIV status – accuracy assured.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="usp-list-item">
                <img src="/assets/icons/pharmacy.svg" alt="catch early" />
                <div className="usp-description">
                  <h6>Catch early - Timely detection matters</h6>
                  <p>
                    Helps you catch HIV early, manage with prompt intervention.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div className="buttons-container flex flex-row">
            <button className="bg-primary text-white py-3 px-6 rounded-full mr-4 hover:bg-blue-700">
              <a
                className="inline-flex items-center "
                href="https://atomohivtest.com/home.php"
                target="_blank"
                rel="noreferrer"
              >
                Buy Now{" "}
                <img
                  className="ml-3"
                  src="/assets/icons/open-link.svg"
                  alt="Open purchase link in new tap"
                />
              </a>
            </button>
            <button className="border-2 border-primary py-3 px-6 rounded-full mr-4  hover:border-blue-800">
              <a
                className="inline-flex items-center text-primary hover:text-blue-800"
                href="https://atomohivtest.com/home.php"
                target="_blank"
                rel="noreferrer"
              >
                Learn more
              </a>
            </button>
          </div>
        </div>

        <div className="product-img w-full flex justify-center items-center p-10 bg-primaryLight rounded-2xl lg:w-2/4 mt-10 lg:mt-0">
          <img
            className="mt-4 w-full"
            src="/assets/images/testkit.png"
            alt="HIV self-testing kit"
          />
        </div>
      </div>
    </section>
  );
}
