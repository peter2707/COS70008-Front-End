import React, { useState } from "react";
import { HiPhoneArrowUpRight } from "react-icons/hi2";

let tabs = [
  { id: 1, name: "HIV", active: true },
  { id: 2, name: "Mental health", active: false },
  { id: 3, name: "Emergency", active: false },
];

const hivHotlines = [
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
];

const mentalHealthHotlines = [
  {
    state: "SYD",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
];

const emergencyHotlines = [
  {
    state: "TAS",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
  {
    state: "VIC",
    name: "Thorne Harbour Health",
    website: "www.thorneharbour.org",
    phone: "(03) 9865 6700",
  },
];

// Define a mapping of state names to colors
const stateColors = {
  VIC: "text-primary",
  SYD: "text-purple-500",
  TAS: "text-orange-500",
};

export default function Hotlines() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleTabSelection(index) {
    setSelectedIndex(index);

    // Update the active state for each tab based on the selected index
    const updatedTabs = tabs.map((tab) => ({
      ...tab,
      active: tab.id === index,
    }));
    tabs = updatedTabs;
  }

  // Function to initiate a phone call
  const initiatePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const renderHotlines = () => {
    const selectedTab = tabs.find((tab) => tab.active);

    if (!selectedTab) {
      return null; // No selected tab
    }

    let hotlinesToRender = [];

    if (selectedTab.name === "HIV") {
      hotlinesToRender = hivHotlines;
    } else if (selectedTab.name === "Mental health") {
      hotlinesToRender = mentalHealthHotlines;
    } else if (selectedTab.name === "Emergency") {
      hotlinesToRender = emergencyHotlines;
    }

    return hotlinesToRender.map((hotline, index) => (
      <div key={index} className="bg-white p-6 rounded-lg">
        <h6
          className={`mb-2 ${hotline.state === "VIC" ? "text-primary" : ""} ${
            hotline.state === "SYD" ? "text-purple-500" : ""
          } ${hotline.state === "TAS" ? "text-yellow-500" : ""}`}
        >
          {hotline.state}
        </h6>
        <p className="font-semibold">{hotline.name}</p>
        <a
          className="link"
          href={hotline.website}
          target="_blank"
          rel="noreferrer"
        >
          {hotline.website}
        </a>
        <div className="flex justify-between items-center">
          <p className="mt-2">{hotline.phone}</p>
          <HiPhoneArrowUpRight
            title="Make a call?"
            className={`text-xl sm:text-2xl text-green-500 hover:text-green-600 cursor-pointer`}
            onClick={() => initiatePhoneCall(hotline.phone)}
          />
        </div>
      </div>
    ));
  };

  return (
    <section className="hotlines mx-6 sm:mx-8 mb-10 sm:mb-20">
      <h1>Hotlines</h1>
      <div className="hotline-wrapper bg-gray-100 p-8 rounded-lg mt-4">
        {selectedIndex !== null && (
          <div className="tabs-container flex flex-wrap sm:flex-nowrap sm:flex-row">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`text-base font-normal rounded-full px-5 py-2 mr-2 mb-2 sm:mb-0 transition-colors duration-75 ease-linear ${
                  tab.active
                    ? "font-semibold bg-primaryLight text-primary border border-blue-300"
                    : "bg-white text-gray-600 hover:bg-primaryLight hover:text-primary"
                }`}
                onClick={() => handleTabSelection(tab.id)} // Wrap in arrow function
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}

        <div className="hotlines-container w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {renderHotlines()}
        </div>
      </div>
    </section>
  );
}
