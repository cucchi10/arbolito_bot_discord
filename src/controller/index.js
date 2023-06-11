const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
const controllers = {};
const pathFile = ".controller.js";

// Initializing controllers
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-pathFile.length) === pathFile
  )
  .forEach((file) => {
    const controller = require(path.join(__dirname, file));
    Object.assign(controllers, controller);
  });

module.exports = controllers;
