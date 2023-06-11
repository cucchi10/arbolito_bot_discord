const fs = require("fs");
const path = require("path");

const basename = path.basename(__filename);
const stores = {};
const pathFile = ".store.js";

// Initializing stores
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-pathFile.length) === pathFile
  )
  .forEach((file) => {
    const store = require(path.join(__dirname, file));
    Object.assign(stores, store);
  });

module.exports = stores;
