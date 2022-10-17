/*
 *
 *  CONTROLLER FOR CREATING AN DEVTO ARTICLE
 *
 */

// DEPENDENCIES
import axios from "axios";

// @params - Request & Response Object
// @returns - Response to the API Request
export const add = async (bodyData) => {
  console.log(bodyData);
  const baseURL = "https://dev.to/api/articles";
  const config = {
    headers: {
      "Content-Type": "application/json",
      api_key: bodyData.api_key,
    },
  };
  const data = {
    article: {
      title: bodyData.title,
      published: bodyData.published,
      body_markdown: bodyData.body_markdown,
    },
  };
  try {
    const response = await axios.post(baseURL, data, config);
    return response.json;
  } catch (err) {
    res.json(err);
  }
};
