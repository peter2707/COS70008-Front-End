import parse from "html-react-parser";
import { useLoaderData } from "react-router-dom";
import { getTopicContent } from "./learnAPI";
import { TbMenuDeep } from "react-icons/tb";
import "./Learn.css";

export async function loader({ params }) {
  try {
    const token = localStorage.getItem("token");
    const content = await getTopicContent(params.subTopicContentId, token);
    return { content };
  } catch (error) {
    console.error("Failed to fetch subtopic content:", error);
    return { content: [] }; // Provide an empty array or handle the error appropriately
  }
}

export default function TopicContent() {
  const { content } = useLoaderData();

  if (!content || content.length === 0) {
    return (
      <p className="content-wrapper bg-gray-50 w-full pt-8">
        No content available.
      </p>
    );
  }

  function scrollToSection(sectionName) {
    const id = sectionName.toLowerCase().replace(/\s+/g, "-");
    const targetSection = document.getElementById(id);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

      // Add the "highlighted" class to the section
      targetSection.classList.add("highlighted");

      // Set a timeout to remove the "highlighted" class after 2 seconds
      setTimeout(() => {
        targetSection.classList.remove("highlighted");
      }, 2000); // 2000 milliseconds (2 seconds)
    } else {
      console.error("Failed to scroll to section:", id);
    }
  }

  return (
    <div className="content-wrapper bg-gray-50 w-full pt-8">
      {content.map((data) => (
        <div
          key={data._id}
          className="h-full flex flex-col-reverse lg:flex-row"
        >
          <div className="h-full mx-4 mt-16 lg:mt-0 lg:mx-8">
            <p className="text-primary font-semibold">{data.name}</p>
            {/* Render the parsed content within a container */}
            <div className="parsed-content h-full">{parse(data.content)}</div>
          </div>
          <div className="fixed top-24 bg-white lg:top-0 z-0 lg:bg-gray-50 lg:relative w-full flex items-center justify-start lg:block lg:w-2/12 border-b lg:border-0 px-4 pt-4 lg:pt-0 lg:px-8 mb-2 pl-10 lg:pl-0 lg:mb-0">
            <div className="w-full flex lg:block">
              <TbMenuDeep className="hidden lg:block text-2xl transform scale-x-[-1] mb-4 my-2 lg:my-0" />
              {data.meta.sections.map((section) => (
                <div key={section.id} className="w-fit flex lg:block">
                  <p
                    className="w-fit text-xs font-medium text-blue-200 hover:text-primary cursor-pointer border lg:border-0 p-2 lg:p-0 m-2 lg:m-0 lg:mt-2 rounded-full lg:rounded-none"
                    onClick={() => scrollToSection(section.name)}
                  >
                    {section.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
