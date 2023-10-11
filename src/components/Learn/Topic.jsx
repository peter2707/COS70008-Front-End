import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//import { HiBookmark } from "react-icons/hi";
import { TbMenuDeep } from "react-icons/tb";
import { HiOutlineX } from "react-icons/hi";
//import { Form } from "react-router-dom";

export default function Topic({
  topics,
  isLoading,
  showOverview,
  handleOverviewClick,
  handleTopicSelection,
  toggleSidebar,
  activateSidebar,
}) {
  return (
    <>
      {/* Left panel desktop - topics navigation */}
      <div
        id="topic"
        className="topics-wrapper-desktop hidden lg:flex bg-white w-1/5 px-4 py-8"
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="fixed">
            <h6
              className={`font-semibold text-lg lg:text-xl cursor-pointer p-0 mb-4 ${
                showOverview
                  ? "text-primary"
                  : "hover:text-primary transition-colors duration-75"
              }`}
              onClick={handleOverviewClick}
            >
              Overview
            </h6>
            {/* Toggle Overview */}
            {topics.map((topic) => (
              <div key={topic._id}>
                <h6 className="font-semibold text-lg lg:text-xl">
                  {topic.name}
                </h6>

                <nav className="sub-topics-container ml-4 mt-2">
                  <ul>
                    {topic.sub_topics.map((sub_topic) => (
                      <li
                        className={`cursor-pointer text-base lg:text-lg ${
                          !showOverview
                            ? "text-primary font-semibold"
                            : "text-black hover:text-primary transition-colors duration-75"
                        }`}
                        key={sub_topic._id}
                        onClick={() =>
                          handleTopicSelection(sub_topic.content_id)
                        }
                      >
                        <Link to={`/learn/${sub_topic._id}`}>
                          {sub_topic.name}
                        </Link>
                        {/*<Bookmark />*/}
                      </li>
                    ))}
                  </ul>
                </nav>
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
            <div className="bg-white w-3/5 min-w-max px-4 pt-8">
              <button
                className="w-full flex justify-end"
                onClick={toggleSidebar}
              >
                <HiOutlineX className="text-3xl border rounded-md" />
              </button>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <div>
                  <h6
                    className={`font-semibold text-lg lg:text-xl cursor-pointer p-0 mb-4 ${
                      showOverview
                        ? "text-primary"
                        : "hover:text-primary transition-colors duration-75"
                    }`}
                    onClick={handleOverviewClick}
                  >
                    Overview
                  </h6>
                  <div className="flex items-start justify-start">
                    {topics.map((topic) => (
                      <nav key={topic._id} className="mb-4">
                        <h6 className="font-semibold text-lg lg:text-xl">
                          {topic.name}
                        </h6>
                        <ul>
                          {topic.sub_topics.map((sub_topic) => (
                            <li
                              className={`cursor-pointer text-base lg:text-lg ml-4 my-2 ${
                                !showOverview
                                  ? "text-primary font-semibold"
                                  : "text-black hover:text-primary transition-colors duration-75"
                              }`}
                              key={sub_topic._id}
                              onClick={() =>
                                handleTopicSelection(sub_topic.content_id)
                              }
                            >
                              {sub_topic.name}
                            </li>
                          ))}
                        </ul>
                      </nav>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-500/20 backdrop-blur-sm w-full"></div>
          </div>
        )}
      </div>
    </>
  );
}

/* TODO: To be used later for bookmark feature

function Bookmark({ topic }) {
  let bookmark = topic.subtopic.bookmark;
  return (
    <Form method="post">
      <button
        name="bookmark"
        value={bookmark ? "false" : "true"}
        aria-label={bookmark ? "Remove from bookmarks" : "Add to bookmarks"}
      >
        {bookmark ? (
          <HiBookmark className="text-primary" />
        ) : (
          <HiBookmark className="text-gray-200" />
        )}
      </button>
    </Form>
  );
}
*/
