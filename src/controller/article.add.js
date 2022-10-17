/*
 *
 *  CONTROLLER FOR CREATING AN DEVTO ARTICLE
 *
 */

// DEPENDENCIES
import axios from "axios";

// * @params - bodyData object
// * [title: String, published: Boolean, body_markdown: String, api_key: String]
//
// * @returns - Response from the API Request
export const add = async (bodyData) => {
  const baseURL = "https://dev.to/api/articles";
  // * Set the headers for your POST API request
  // * Add your Dev.to api key in the headers object
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
    return response;
  } catch (err) {
    return err;
  }
};
