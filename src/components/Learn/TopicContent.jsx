import parse from "html-react-parser";
import { useLoaderData } from "react-router-dom";
import { getTopicContent } from "./learnAPI";

const token = localStorage.getItem("token");
export async function loader({ params }) {
  try {
    const content = await getTopicContent(params.subTopicContentId, token);
    console.log(token);
    return { content };
  } catch (error) {
    console.error("Failed to fetch subtopic content:", error);
    return { content: [] }; // Provide an empty array or handle the error appropriately
  }
}

export default function TopicContent() {
  const { content } = useLoaderData();

  return (
    <div className="content-wrapper bg-gray-50 w-full pt-8">
      {content && content !== null ? (
        content.map((data) => (
          <div className="mx-4 lg:mx-8" key={data._id}>
            <p className="text-primary font-semibold">{data.name}</p>
            <div>{parse(data.content)}</div>
          </div>
        ))
      ) : (
        <p>No content available.</p>
      )}
    </div>
  );
}
