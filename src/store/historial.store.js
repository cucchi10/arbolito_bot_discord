const { validateDollarStore, validateHistorialStore } = require("../utils");
const { dollarsKeysDefaultStringify } = require("../constants");

let historialStore = [];

function setDefaultHistorialStore() {
  historialStore = [];
}
function getHistorialStore() {
  if (!historialStore) setDefaultHistorialStore();
  return historialStore;
}
function getLengthHistorialStore() {
  if (!historialStore) setDefaultHistorialStore();
  return historialStore.length;
}

function CheckHistorialtore(fn) {
  return function (...args) {
    if (!validateHistorialStore(historialStore)) {
      setDefaultHistorialStore();
    }
    return fn(...args);
  };
}

function addHistorialStore(historial) {
  const isDollars = validateDollarStore(historial, dollarsKeysDefaultStringify);
  if (isDollars) {
    historialStore.push(historial);
  }
}

function deleteOneHistorialStore() {
  const lengthHistorial = getLengthHistorialStore();
  if (lengthHistorial > 0) {
    historialStore.shift();
  }
}

module.exports = {
  getHistorialStore,
  addHistorialStore: CheckHistorialtore(addHistorialStore),
  getLengthHistorialStore: CheckHistorialtore(getLengthHistorialStore),
  deleteOneHistorialStore: CheckHistorialtore(deleteOneHistorialStore),
};
