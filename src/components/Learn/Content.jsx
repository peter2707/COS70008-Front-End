import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import TopicOverview from "./TopicOverview";
import Topic from "./Topic";
import { getAllTopics, getTopicContent } from "./learnAPI";

export default function Content() {
  const [token, setToken] = useState("");
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activateSidebar, setActivateSidebar] = useState(false);
  const [showOverview, setShowOverview] = useState(true); // Default to show overview

  // Function to fetch all topics
  async function fetchAllTopics() {
    setIsLoading(true);

    try {
      // Get token from local storage
      const tokenFromStorage = localStorage.getItem("token");
      if (tokenFromStorage) {
        setToken(tokenFromStorage);

        const results = await getAllTopics(tokenFromStorage);
        setTopics(results);
      } else {
        console.log("Token not found.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  // Function to fetch content for a selected topic
  async function fetchTopicContent(topicId) {
    setIsLoading(true);

    try {
      const results = await getTopicContent(topicId, token);
      setContent(results);
      setShowOverview(false); // Hide the Overview when a topic is selected
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  // Function to handle the selection of a topic
  function handleTopicSelection(contentId) {
    setSelectedTopic(contentId);
    // Close the sidebar after a subtopic is selected
    setActivateSidebar(false);
    setShowOverview(false); // Hide the Overview when a topic is selected
  }

  function toggleSidebar() {
    setActivateSidebar(!activateSidebar);
  }

  // Effect to fetch topics when the component mounts
  useEffect(() => {
    fetchAllTopics();
  }, []);

  // Effect to fetch content when selectedTopic changes
  useEffect(() => {
    if (selectedTopic !== null) {
      fetchTopicContent(selectedTopic);
    }
  }, [selectedTopic]);

  // Function to handle showing the Overview
  function handleOverviewClick() {
    setSelectedTopic(null); // Reset selected topic
    setShowOverview(true); // Show the Overview
    setContent(null); // Clear content
  }

  return (
    <div className="relative top-24 z-10 learn-container flex flex-col lg:flex-row">
      <Topic
        topics={topics}
        isLoading={isLoading}
        showOverview={showOverview}
        handleOverviewClick={handleOverviewClick}
        handleTopicSelection={handleTopicSelection}
        toggleSidebar={toggleSidebar}
        activateSidebar={activateSidebar}
      />

      {/* Display content on the right */}
      <div className="content-wrapper bg-gray-50 w-full">
        <div>
          {showOverview ? (
            // Always show the TopicOverview
            <TopicOverview
              topics={topics}
              handleTopicSelection={handleTopicSelection}
            />
          ) : content ? (
            content.map((data) => (
              <div className="mt-20 lg:mt-8 mx-4 lg:mx-8" key={data._id}>
                <p className="text-primary font-semibold">{data.name}</p>
                <div>{parse(data.content)}</div>
              </div>
            ))
          ) : (
            <p>Select a topic or click "Overview" to see the overview.</p>
          )}
        </div>
      </div>
    </div>
  );
}
