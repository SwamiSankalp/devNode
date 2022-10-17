# devNode - API for Scheduling Dev.to articles!

A very basic Node.js, Express.js application uses the `axios` library to make API requests to the forem API in order to schedule dev.to articles using the `node-cron` library.

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
| 6 | `published` | `String` | ✅ |
| 7 | `body_markdown` | `String` | ✅ |
| 8 | `api_key` | `String` | ✅ |
