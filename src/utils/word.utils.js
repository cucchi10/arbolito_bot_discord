const { validateStringArgument } = require("./validations.utils.js");
/**
 * function to standardize a word to uppercase.
 * @param {String}
 * @returns uppercase word || ''
 */
function convertToUpperCase(string) {
  if (!validateStringArgument(string)) {
    return "";
  }
  return string.trim().toUpperCase();
}

/**
 * function to standardize a word to lowercase.
 * @param {String}
 * @returns lowercase word || ''
 */
function convertToLowerCase(string) {
  if (!validateStringArgument(string)) {
    return "";
  }
  return string.trim().toLowerCase();
}

module.exports = {
  convertToUpperCase,
  convertToLowerCase,
};
