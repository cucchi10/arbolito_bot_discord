const { noCotiza, brechaCotiza } = require("../constants");

function isNumber(value) {
  return (
    value != undefined &&
    value != null &&
    value !== "" &&
    !isNaN(Number(value?.toString()))
  );
}

function formatNumber(value, decimals = 2) {
  let convertedValue = parseFloat(value?.replace(".", "")?.replace(",", "."));
  return isNumber(convertedValue) ? convertedValue.toFixed(decimals) : noCotiza;
}

function getDiference(newValue, oldValue) {
  return Math.abs(newValue - oldValue);
}

function comparePrices(oldsDollars, newDollars) {
  if (!oldsDollars.length) return true;
  let conditional = false;
  oldsDollars.forEach((oldDollars) => {
    Object.keys(oldDollars).forEach((key) => {
      const oldPrice = oldDollars[key].venta;
      const newPrice = newDollars[key].venta;
      if (isNumber(oldPrice) && isNumber(newPrice)) {
        const difference = getDiference(newPrice, oldPrice);
        const percentDifference = (difference / oldPrice) * 100;

        if (percentDifference >= brechaCotiza) {
          conditional = true;
        }
      }
    });
  });

  return conditional;
}

module.exports = {
  isNumber,
  formatNumber,
  comparePrices,
  getDiference,
};
