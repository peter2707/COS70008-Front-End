import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Topic({ name, subTopics }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (itemId) => {
    setSelectedItem(itemId);
  };

  return (
    <div className="block w-64 mb-4">
      <p className="w-fit text-lg lg:text-xl font-semibold mb-2">{name}</p>

      {subTopics && subTopics !== null ? (
        <nav role="navigation" className="ml-4 w-fit">
          <ul>
            {subTopics.map((subTopic) => (
              <li
                key={subTopic._id}
                className={`text-base hover:text-primary lg:text-lg mb-2 ${
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
