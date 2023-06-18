const {
  getDollarsDefault,
  dollarsKeysDefaultStringify,
} = require("../constants");
const { validateDollarStore } = require("../utils");

let dollarsStore;

function setDefaultDollarStore() {
  dollarsStore = getDollarsDefault();
}
function getDollarsStore() {
  if (!dollarsStore) setDefaultDollarStore();
  return dollarsStore;
}

function CheckDollarStore(fn) {
  return function (...args) {
    if (!validateDollarStore(dollarsStore, dollarsKeysDefaultStringify)) {
      setDefaultDollarStore();
    }
    return fn(...args);
  };
}

function setDollarsStore(dollars) {
  dollarsStore = dollars;
}

function setDollarStore(dollar, values) {
  if (dollarsStore[dollar]) {
    dollarsStore[dollar] = values;
  }
}

function setDollarStoreCompra(dollar, compra) {
  if (dollarsStore[dollar]) {
    dollarsStore[dollar].compra = compra;
  }
}

function setDollarStoreVenta(dollar, venta) {
  if (dollarsStore[dollar]) {
    dollarsStore[dollar].venta = venta;
  }
}

module.exports = {
  getDollarsStore,
  setDollarsStore: CheckDollarStore(setDollarsStore),
  setDollarStore: CheckDollarStore(setDollarStore),
  setDollarStoreCompra: CheckDollarStore(setDollarStoreCompra),
  setDollarStoreVenta: CheckDollarStore(setDollarStoreVenta),
};
