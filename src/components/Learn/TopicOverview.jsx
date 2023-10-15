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
        href="/"
      />
      <div className="title-wrapper my-8 mx-6">
        <h2>Overview</h2>
        <p className="mt-2 text-xl">
          Explore the topics below to gain access to the knowledge you need to
          make informed decisions and take control of your health.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row">
        {topics.map((topic) => (
          <div
            className="hover:bg-primaryLight text-black bg-white cursor-pointer m-6 p-4"
            key={topic._id}
            onClick={handleClick}
          >
            <Link to={`${topic.sub_topics[0].content_id}`}>
              <h5 className="text-primary mb-4 w-fit">{topic.name}</h5>
              <p>
                Dive into the very core of HIV/AIDS, various symptoms, stages of
                HIV infection and find strategies for managing them effectively.
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicOverview;
