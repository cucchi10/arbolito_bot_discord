const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
const utils = {};
const pathFile = ".utils.js";

// Initializing utils
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-pathFile.length) === pathFile
  )
  .forEach((file) => {
    const util = require(path.join(__dirname, file));
    Object.assign(utils, util);
  });

module.exports = utils;
