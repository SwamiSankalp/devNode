# devNode - API for Scheduling Dev.to articles!

A very basic Node.js plus Express.js based application uses the `axios` library to make API requests to the forem API in order to schedule dev.to articles using the `node-cron` library.

**To use the application, follow the steps below:**

*Step 1*: Clone the repository
```
$ git clone https://github.com/SwamiSankalp/devNode.git
```
*Step 2*: Using the following command, install all the required dependencies:
```
$ npm install
```
*Step 3*: Run `npm run dev` to spin up the server.

*Step 4*: Use any API client to test this backend APIs, or integrate it with your frontend. The table below contains a list of API endpoints.

### API Endpoints

| S.No | Path | METHOD | Body | Goal | 
| --- | --- | --- | --- | --- |
| 1 | `/` | `GET` | - | Retrieves all the articles from Dev.to |
| 2 | `/schedule` | `POST` | { "minutes": 12, "hours": *int*, "date": *int*, "month": *int*, "title": *string*, "published": *boolean*, "body_markdown": *string*, "api_key": *string*} | Schedules a Dev.to article | 

#### Body Data for the `/schedule` path POST request

| S.No | Key | Value type | Required | 
| --- | --- | --- | --- |
| 1 | `minutes` | `Integer` | ✅ |
| 2 | `hours` | `Integer` | ✅ |
| 3 | `date` | `Integer` | ✅ |
| 4 | `month` | `Integer` | ✅ |
| 5 | `title` | `String` | ✅ |
| 6 | `published` | `Boolean` | ✅ |
| 7 | `body_markdown` | `String` | ✅ |
| 8 | `api_key` | `String` | ✅ |
