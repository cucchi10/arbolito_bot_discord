/**
 * function to validate an argument if it is of type string and check if it contains at least one letter.
 * @returns true || false
 */
function validateStringArgument(string) {
  if (typeof string !== "string" || string.trim().length === 0) {
    return false;
  }
  return true;
}

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
