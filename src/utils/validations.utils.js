const { isNumber } = require("./number.utils.js");

/**
 * Function to compare Keys.
 * @param {Object}
 * @returns true || false
 */
function compareKeys(store, storeDefault) {
  return JSON.stringify(Object.keys(store)) === storeDefault;
}

/**
 * Function to validate if the object is of the expected type for the Dollar Store.
 * @param {any, Object}
 * @returns true || false
 */
function validateDollarStore(store, storeDefault) {
  return store && typeof store === "object" && compareKeys(store, storeDefault);
}

/**
 * Function to validate if the object is of the expected type for the Historial Store.
 * @param {any}
 * @returns true || false
 */
function validateHistorialStore(historial) {
  return historial && Array.isArray(historial);
}

/**
 * Function to validate if the object is of the expected type for the Time Store.
 * @param {any}
 * @returns true || false
 */
function validateTimeHistorialStore(time) {
  return isNumber(time);
}

/**
 * Function to validate an argument if it is of type string and check if it contains at least one letter.
 * @param {any}
 * @returns true || false
 */
function validateStringArgument(string) {
  if (typeof string !== "string" || string.trim().length === 0) {
    return false;
  }
  return true;
}

module.exports = {
  compareKeys,
  validateDollarStore,
  validateTimeHistorialStore,
  validateHistorialStore,
  validateStringArgument,
};
