/*
 *
 * ENTRY FILE FOR THE APPLICATION
 *
 */

// DEPENDENCIES
import express from "express";
import axios from "axios";
import { scheduler } from "./controller/scheduler.js";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// * API Endpoint for Fetching all the DevTo articles
// * **For testing purpose only**
//
// * Endpoint => "/"
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://dev.to/api/articles");
    res.json(response.data);
  } catch {
    return "No data found";
  }
});

//  * API Endpoint to Schedule DevTo articles
//  *
//  * Endpoint => "/schedule"
//  * @params => Express global Request & Response objects
//  * @returns => Response object for the API Request
//  *
//  * Expected @params
//  *
//  * minutes: int, hours: int, date: int, month: int, title: string,
//  * published: boolean, body_markdown: string, api_key: string
app.post("/schedule", async (req, res) => {
  // time object serves as arguments for scheduler function
  const time = {
    minutes: req.body.minutes,
    hours: req.body.hours,
    date: req.body.date,
    month: req.body.month,
  };
  // data object serves as arguments for making API request to Devto
  const data = {
    title: req.body.title,
    published: req.body.published,
    body_markdown: req.body.body_markdown,
    api_key: req.body.api_key,
  };
  try {
    await scheduler(time, data);
    res.status(201).json({
      result: `Your articles is scheduled on ${time.date}, ${time.month} at ${time.hours}:${time.minutes}`,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// SERVER INITIALIZATION
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
