const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
const commands = {};
const pathFile = ".commands.js";

// Initializing commands
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-pathFile.length) === pathFile
  )
  .forEach((file) => {
    const command = require(path.join(__dirname, file));
    Object.assign(commands, command);
  });

module.exports = commands;
