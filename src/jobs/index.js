const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
const jobs = {};
const pathFile = ".jobs.js";

// Initializing jobs
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-pathFile.length) === pathFile
  )
  .forEach((file) => {
    const job = require(path.join(__dirname, file));
    Object.assign(jobs, job);
  });

module.exports = jobs;
