const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
const services = {};
const pathFile = ".service.js";

// Initializing services
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-pathFile.length) === pathFile
  )
  .forEach((file) => {
    const service = require(path.join(__dirname, file));
    Object.assign(services, service);
  });

module.exports = services;
