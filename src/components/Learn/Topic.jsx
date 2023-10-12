import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Topic({ name, subTopics }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (itemId) => {
    setSelectedItem(itemId);
  };

  return (
    <div className="w-full lg:w-1/5 block mb-6 pt-8">
      <p className="text-lg lg:text-xl font-semibold mb-2">{name}</p>

      {subTopics && subTopics !== null ? (
        <nav role="navigation" className="ml-4">
          <ul>
            {subTopics.map((subTopic) => (
              <li
                key={subTopic._id}
                className={`text-base hover:text-primary lg:text-lg mb-3 ${
                  selectedItem === subTopic._id ? "text-primary font-semibold" : "text-black"
                }`}
                onClick={() => handleClick(subTopic._id)}
              >
                <Link to={`${subTopic.content_id}`}>{subTopic.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        // Provide a fallback or handle the case when subTopics is falsy.
        <div>No sub-topics available.</div>
      )}
    </div>
  );
}
