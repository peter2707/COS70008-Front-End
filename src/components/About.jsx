import React from "react";

export default function About() {
  return (
    <section className="w-full lg:max-w-screen-2xl mx-auto mt-24">
      <div className="mx-6 sm:mx-8">
        <div className="header py-8">
          <h1 className="text-primary">About Us</h1>
          <h4 className="-mt-2">Reach for the many</h4>
          <h1 className="text-2xl font-medium text-primary my-2">
            At Burnet, we are helping to create the future of health, placing
            equity at the centre of what we do, and paying close attention to
            the effects of a rapidly changing climate and environment. We’re
            working for a future where diseases are eliminated, where mothers
            and children are thriving, where the world is better prepared for
            health challenges, and where those at risk are supported to reduce
            harms to their health.
          </h1>
        </div>
        <hr className="my-2" />
        <div className="sources">
          <h1 className="">Sources</h1>
          <p>
            Our commitment to accuracy is underpinned by a rigorous process of
            information gathering and verification. We rely on a diverse array
            of reputable sources to ensure the credibility of our content,
            including:
          </p>

          <div className="w-full flex flex-wrap items-center justify-between py-8">
            <img
              className="w-auto bg-gray-200 p-2"
              src="/assets/images/ashm.png"
              alt="ashm"
            />
            <img
              className="w-auto"
              src="/assets/images/stiaulogo.png"
              alt="stiaulogo"
            />
            <img
              className="w-auto"
              src="/assets/images/thorneharbourhealth.png"
              alt="thorneharbourhealth"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
