import axios from "axios";

const topicsUrl = "http://localhost:3000/content/topics";
const contentUrlBase = "http://localhost:3000/content/page/";

export async function getAllTopics() {
  try {
    const response = await axios.get(topicsUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(`here`, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getTopicContent(topicId) {
  try {
    const response = await axios.get(`${contentUrlBase}${topicId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Modify the response data to add 'id' attributes to 'h1' elements
    response.data.forEach((result) => {
      result.content = modifyContentWithIds(result.content);
    });

    console.log(`content: `, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function modifyContentWithIds(content) {
  // Find all the 'h1' elements with the 'href' attribute
  const h1WithHref = content.match(/<h1 class='subSection' href='#(\S+?)'>(.*?)<\/h1>/g);

  if (h1WithHref) {
    // Loop through the matched 'h1' elements and add 'id' attributes
    h1WithHref.forEach((h1) => {
      const hrefMatch = h1.match(/href='#(\S+?)'/);
      if (hrefMatch) {
        // Get the text content from the 'h1' element
        const textContent = h1.match(/<h1 class='subSection' href='#(\S+?)'>(.*?)<\/h1>/)[2];
        const id = textContent.toLowerCase().replace(/\s+/g, '-'); // Create id based on the content
        
        // Replace the 'h1' element with a new id
        content = content.replace(h1, `<h1 class="subSection" id="${id}">${textContent}</h1>`);
      }
    });
  }

  return content;
}

