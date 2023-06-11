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

function comparePrices(oldsDollars, newDollars) {
  let conditional = false;
  Object.keys(oldsDollars).forEach((key) => {
    const oldPrice = oldsDollars[key].venta;
    const newPrice = newDollars[key].venta;
    if (isNumber(oldPrice) && isNumber(newPrice)) {
      const difference = Math.abs(newPrice - oldPrice);

      if (difference >= brechaCotiza) {
        conditional = true;
      }
    }
  });

  return conditional;
}

module.exports = {
  isNumber,
  formatNumber,
  comparePrices,
};
