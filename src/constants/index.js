const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
const constants = {};
const pathFile = ".constants.js";

// Initializing constants
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-pathFile.length) === pathFile
  )
  .forEach((file) => {
    const constant = require(path.join(__dirname, file));
    Object.assign(constants, constant);
  });

module.exports = constants;
