# devNode - API for Scheduling Dev.to articles!

A very basic Node.js plus Express.js based application uses the `axios` library to make API requests to the forem API in order to schedule dev.to articles using the `node-cron` library.

**To use the application, follow the steps below:**

_Step 1_: Clone the repository

```
$ git clone https://github.com/SwamiSankalp/devNode.git
```

_Step 2_: Using the following command, install all the required dependencies:

```
$ npm install
```

_Step 3_: Run `npm run dev` to spin up the server.

_Step 4_: Use any API client to test this backend APIs, or integrate it with your frontend. The table below contains a list of API endpoints.

### API Endpoints

| S.No | Path        | METHOD | Body                                                                                                                                                         | Goal                                   |
| ---- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| 1    | `/`         | `GET`  | -                                                                                                                                                            | Retrieves all the articles from Dev.to |
| 2    | `/schedule` | `POST` | { "minutes": 12, "hours": _int_, "date": _int_, "month": _int_, "title": _string_, "published": _boolean_, "body*markdown": \_string*, "api*key": \_string*} | Schedules a Dev.to article             |

#### Body Data for the `/schedule` path POST request

| S.No | Key             | Value type | Required |
| ---- | --------------- | ---------- | -------- |
| 1    | `minutes`       | `Integer`  | ✅       |
| 2    | `hours`         | `Integer`  | ✅       |
| 3    | `date`          | `Integer`  | ✅       |
| 4    | `month`         | `Integer`  | ✅       |
| 5    | `title`         | `String`   | ✅       |
| 6    | `published`     | `Boolean`  | ✅       |
| 7    | `body_markdown` | `String`   | ✅       |
| 8    | `api_key`       | `String`   | ✅       |
