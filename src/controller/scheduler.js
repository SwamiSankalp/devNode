/*
 *
 * Scheduling Mechanism
 *
 */

// DEPENDENCIES
import cron from "node-cron";
import { add } from "./article.add.js";

export const scheduler = (time, data) => {
  console.log(time);
  let response;
  let job = cron.schedule(
    `${time.minutes} ${time.hours} ${time.date} ${time.month} *`,
    async () => {
      response = await add(data);
    }
  );

  job.start();
  return response;
};
