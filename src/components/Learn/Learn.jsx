import React, { useState } from "react";
import "./Learn.css";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getAllTopics } from "./learnAPI";
import Topic from "./Topic";
import TopicOverview from "./TopicOverview";
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
  const [showOverview, setShowOverview] = useState(true);

  if (topics === null) {
    setIsLoading(true);
  } else if (topics.length === 0) {
    return <p>No topics found</p>;
  }

  function toggleSidebar() {
    setActivateSidebar(!activateSidebar);
  }

  function showTopicOverview() {
    setShowOverview(true);
  }

  function hideTopicOverivew() {
    setShowOverview(false);
  }

  return (
    <section className="w-full h-auto relative top-24 lg:max-w-screen-2xl mx-auto">
      <div className="learn-container">
        {/* Left panel desktop - topics navigation */}
        <div className="topics-wrapper-desktop hidden lg:flex bg-white w-full">
          {isLoading ? (
            <p>Loading topics</p>
          ) : (
            <div className="fixed bg-white w-fit h-full mb-6 pt-8 px-6">
              <div className="cursor-pointer" onClick={showTopicOverview}>
                <p className="text-lg lg:text-xl font-semibold mb-4">
                  Overview
                </p>
              </div>
              {topics.map((topic) => (
                <Topic
                  key={topic._id}
                  name={topic.name}
                  subTopics={topic.sub_topics}
                  hideTopicOverview={hideTopicOverivew}
                />
              ))}
            </div>
          )}
          <div id="subtopic-content-render" className="relative w-full ml-80">
            {showOverview ? <><TopicOverview topics={topics} hideTopicOverview={hideTopicOverivew}/></> : <Outlet />}
          </div>
        </div>

        {/* Left panel mobile - topics navigation */}
        <div className="relative topics-wrapper-mobile lg:hidden w-full">
          <div
            className="fixed z-50 top-28 bg-blue-200/20 w-fit left-1 p-1 backdrop-blur-xl rounded-lg"
            onClick={toggleSidebar}
          >
            <TbMenuDeep className="text-3xl text-primary" />
          </div>
          {activateSidebar && (
            <div className="absolute top-16 flex flex-row w-full h-full">
              <div className="bg-white w-3/5 min-w-max px-4 pt-10">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    <div className="cursor-pointer" onClick={showTopicOverview}>
                      <p className="text-lg lg:text-xl font-semibold mb-4">
                        Overview
                      </p>
                    </div>
                    {topics.map((topic) => (
                      <Topic
                        key={topic._id}
                        name={topic.name}
                        subTopics={topic.sub_topics}
                        hideTopicOverview={hideTopicOverivew}
                      />
                    ))}
                  </>
                )}
              </div>

              <div className="bg-gray-500/20 backdrop-blur-sm w-full"></div>
            </div>
          )}
          <div id="subtopic-content-render" className="w-full">
            {showOverview ? <TopicOverview topics={topics} hideTopicOverview={hideTopicOverivew} /> : <Outlet />}
          </div>
        </div>
      </div>
    </section>
  );
}
