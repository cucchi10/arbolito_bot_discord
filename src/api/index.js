const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
const apis = {};
const pathFile = ".api.js";

// Initializing apis
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-pathFile.length) === pathFile
  )
  .forEach((file) => {
    const api = require(path.join(__dirname, file));
    Object.assign(apis, api);
  });

module.exports = apis;
