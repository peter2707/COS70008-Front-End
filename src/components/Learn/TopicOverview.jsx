import { Link } from "react-router-dom";
import InformationBanner from "../InformationBanner";

const TopicOverview = ({ topics, hideTopicOverview }) => {
  const handleClick = () => {
    hideTopicOverview();
  };

  return (
    <div className="mt-14 lg:mt-0">
      <InformationBanner
        textBold="Acknowledgement: "
        text="We want to ensure that you have access to the most accurate and reliable information available. The content on this page has been sourced from reputable organisations dedicated to HIV/AIDS education and awareness. "
        linkName="Learn more"
        href="/about"
      />
      <div className="title-wrapper my-8 mx-6">
        <h2>Overview</h2>
        <p className="mt-2 text-xl">
          Explore the topics below to gain access to the knowledge you need to
          make informed decisions and take control of your health.
        </p>
      </div>
      <div className="grid grid-1 md:grid-cols-2 gap-2 mx-6 md:mx-8">
        {topics.map((topic) => (
          <div
            className="w-full hover:bg-primaryLight text-black bg-white cursor-pointer p-4"
            key={topic._id}
            onClick={handleClick}
          >
            <Link
              to={
                topic.sub_topics.length > 0
                  ? `${topic.sub_topics[0].content_id}`
                  : "No sub topics available" // TODO: Display error if there are no topics available
              }
            >
              <h5 className="text-primary mb-4 w-fit">{topic.name}</h5>
              <p className="w-4/5 h-32">
                {topic.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicOverview;
