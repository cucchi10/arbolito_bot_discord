const CronJob = require("cron");
const { sendPriceDollar } = require("../controller");

// Run every 5 minutes
const syncDollars = new CronJob.CronJob(
  "*/5 * * * *",
  sendPriceDollar,
  null,
  true
);

function initCron(client) {
  try {
    // captureClient(client);
    syncDollars.start();
  } catch (error) {
    console.log(error);
  }
}

module.exports = { initCron };
