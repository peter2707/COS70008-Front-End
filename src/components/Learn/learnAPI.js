import axios from "axios";

const topicsUrl = "http://localhost:3000/content/topics";
const contentUrlBase = "http://localhost:3000/content/page/";

export async function getAllTopics(token) {
  try {
    const response = await axios.get(topicsUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(`here`, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getTopicContent(topicId, token) {
  try {
    const response = await axios.get(`${contentUrlBase}${topicId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`content: `, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
