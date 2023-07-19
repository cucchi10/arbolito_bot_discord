const { noCotiza, brechaCotiza } = require("../constants");
const { isObject } = require("./validations.utils");

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
  let isNeedSay = false;
  const dollarsBrecha = {};
  if (!oldsDollars.length)
    return {
      isNeedSay,
      dollarsBrecha,
    };

  oldsDollars.forEach((oldDollars) => {
    Object.keys(oldDollars).forEach((key) => {
      const oldPrice = oldDollars[key].venta;
      const newPrice = newDollars[key].venta;
      if (isNumber(oldPrice) && isNumber(newPrice)) {
        const difference = getDiference(newPrice, oldPrice);
        const percentDifference = (difference / oldPrice) * 100;

        if (percentDifference >= brechaCotiza) {
          isNeedSay = true;
          if (!dollarsBrecha[key]) {
            dollarsBrecha[key] = newDollars[key];
          }
        }
      }
    });
  });

  return {
    isNeedSay,
    dollarsBrecha,
  };
}

function samePrices(prevDollars, dollarsBrecha) {
  let isSamePrice = false;
  const dollarsVariations = {};
  if (!isObject(prevDollars) || !isObject(dollarsBrecha))
    return {
      isSamePrice,
      dollarsVariations,
    };

  Object.keys(dollarsBrecha).forEach((key) => {
    const oldPrice = prevDollars[key].venta;
    const newPrice = dollarsBrecha[key].venta;
    if (isNumber(oldPrice) && isNumber(newPrice)) {
      const difference = getDiference(newPrice, oldPrice);
      const percentDifference = (difference / oldPrice) * 100;
      dollarsVariations[key] = {
        ...dollarsBrecha[key],
        ["venta anterior"]: oldPrice,
        diferencia: `${percentDifference} %`,
      };
      if (difference === 0) {
        conditional = true;
      }
    }
  });

  return {
    isSamePrice,
    dollarsVariations,
  };
}

module.exports = {
  isNumber,
  formatNumber,
  comparePrices,
  getDiference,
  samePrices,
};
