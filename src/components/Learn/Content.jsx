import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { TbMenuDeep } from "react-icons/tb";
import { HiOutlineX } from "react-icons/hi";
import TopicOverview from "./TopicOverview";

const topicsUrl = "http://localhost:3000/content/topics";
const contentUrlBase = "http://localhost:3000/content/page/";

export default function Content() {
  const [token, setToken] = useState("");
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activateSidebar, setActivateSidebar] = useState(false);

  // Function to fetch all topics
  async function getAllTopics() {
    try {
      setIsLoading(true);
      // Get token from local storage
      const tokenFromStorage = localStorage.getItem("token");
      if (tokenFromStorage) {
        setToken(tokenFromStorage);
        console.log("Token found:", tokenFromStorage);

        const response = await axios.get(topicsUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenFromStorage}`,
          },
        });

        const results = response.data;
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
  async function getTopicContent(topicId) {
    try {
      setIsLoading(true);
      const response = await axios.get(`${contentUrlBase}${topicId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const results = response.data;
      setContent(results);
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
  }

  function toggleSidebar() {
    setActivateSidebar(!activateSidebar);
  }

  // Effect to fetch topics when the component mounts
  useEffect(() => {
    getAllTopics();
  }, []);

  // Effect to fetch content when selectedTopic changes
  useEffect(() => {
    if (selectedTopic !== null) {
      getTopicContent(selectedTopic);
    }
  }, [selectedTopic]);

  return (
    <div className="relative top-24 z-10 learn-container flex flex-col lg:flex-row">
      {/* Left panel desktop - topics navigation */}
      <div className="topics-wrapper-desktop hidden lg:flex bg-white w-1/5 px-4 py-8">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="fixed">
            {topics.map((topic) => (
              <div key={topic._id}>
                <p>{topic.name}</p>

                <div className="sub-topics-container ml-4 mt-2">
                  {topic.sub_topics.map((sub_topic) => (
                    <button
                      className="text-primary"
                      key={sub_topic._id}
                      onClick={() => handleTopicSelection(sub_topic.content_id)}
                    >
                      {sub_topic.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Left panel mobile - topics navigation */}
      <div className="topics-wrapper-mobile lg:hidden w-full">
        <div className="fixed bg-white w-full left-0 px-4 py-2">
          <button onClick={toggleSidebar}>
            <TbMenuDeep className="text-3xl border rounded-md" />
          </button>
        </div>

        {activateSidebar && (
          <div className="fixed flex flex-row w-full h-full">
            <div className="bg-white w-2/5 min-w-fit px-4 pt-8">
              <button
                className="w-full flex justify-end"
                onClick={toggleSidebar}
              >
                <HiOutlineX className="text-3xl border rounded-md" />
              </button>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <div className="py-2 flex items-start justify-start">
                  {topics.map((topic) => (
                    <div key={topic._id}>
                      <p className="text-left">{topic.name}</p>
                      {topic.sub_topics.map((sub_topic) => (
                        <div key={topic._id}>
                          <button
                            onClick={() =>
                              handleTopicSelection(sub_topic.content_id)
                            }
                          >
                            {sub_topic.name}
                          </button>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-gray-500/20 backdrop-blur-sm w-full"></div>
          </div>
        )}
      </div>

      {/* Display content on the right */}
      <div className="content-wrapper bg-gray-50 w-full">
        {content == null ? (
          <TopicOverview
            topics={topics}
            handleTopicSelection={handleTopicSelection}
          />
        ) : (
          <div className="p-4 mt-16 lg:p-8 lg:mt-0">
            {content.map((data) => (
              <div key={data._id}>
                <p className="text-primary font-semibold">{data.name}</p>
                <div>{parse(data.content)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
