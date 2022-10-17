/*
 *
 * Scheduling Mechanism
 *
 */

// DEPENDENCIES
import cron from "node-cron";
import { add } from "./article.add.js";

// * Function for scheduling a task using
// * node-cron module
//
// * @params = time & data object
// * time object = [minutes: Integer, hours: Integer, date: Integer, month: Integer]
//
// * data object serves as arguments for the { add } module
export const scheduler = (time, data) => {
  try {
    let job = cron.schedule(
      `${time.minutes} ${time.hours} ${time.date} ${time.month} *`,
      async () => {
        await add(data);
      }
    );
    job.start();
  } catch (err) {
    return err;
  }
};
