import React, { useState } from "react";
import "./Learn.css";
import { Outlet, useLoaderData } from "react-router-dom";
import { getAllTopics } from "./learnAPI";
import Topic from "./Topic";
import { TbMenuDeep } from "react-icons/tb";

const token = localStorage.getItem("token");

export async function loader() {
  try {
    const topics = await getAllTopics(token);
    return { topics };
  } catch (error) {
    console.error("Failed to fetch topics:", error);
    return { topics: [] }; // Provide an empty array or handle the error appropriately
  }
}

export default function Learn() {
  const { topics } = useLoaderData();
  const [isLoading, setIsLoading] = useState(false);
  const [activateSidebar, setActivateSidebar] = useState(false);

  if (topics === null) {
    setIsLoading(true);
  } else if (topics.length === 0) {
    return <p>No topics found</p>;
  }

  function toggleSidebar() {
    setActivateSidebar(!activateSidebar);
  }

  return (
    <section className="w-full h-auto relative top-24 lg:max-w-screen-2xl mx-auto">
      <div className="learn-container">
        {/* Left panel desktop - topics navigation */}
        <div className="topics-wrapper-desktop hidden lg:flex bg-white w-full px-4">
          {isLoading ? (
            <p>Loading topics</p>
          ) : (
            topics.map((topic) => (
              <Topic
                key={topic._id}
                name={topic.name}
                subTopics={topic.sub_topics}
              />
            ))
          )}

          <div id="subtopic-content-render" className="w-4/5">
            <Outlet />
          </div>
        </div>

        {/* Left panel mobile - topics navigation */}
        <div className="relative topics-wrapper-mobile lg:hidden w-full">
          <div
            className="fixed z-50 top-28 bg-blue-200/20 w-fit right-0 p-1 backdrop-blur-xl rounded-lg"
            onClick={toggleSidebar}
          >
            <TbMenuDeep className="text-3xl text-primary" />
          </div>
          {activateSidebar && (
            <div className="absolute flex flex-row w-full h-full">
              <div className="bg-white w-3/5 min-w-max px-4">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  topics.map((topic) => (
                    <Topic
                      key={topic._id}
                      name={topic.name}
                      subTopics={topic.sub_topics}
                    />
                  ))
                )}
              </div>

              <div className="bg-gray-500/20 backdrop-blur-sm w-full"></div>
            </div>
          )}
          <div id="subtopic-content-render" className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}
