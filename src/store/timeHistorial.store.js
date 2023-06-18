const { validateTimeHistorialStore } = require("../utils");

let timeHistorial;

function setDefaultTimeHistorialStore() {
  timeHistorial = 0;
}
function getTimeHistorialStore() {
  if (!timeHistorial) setDefaultTimeHistorialStore();
  return timeHistorial;
}

function CheckTimeHistorialtore(fn) {
  return function (...args) {
    if (!validateTimeHistorialStore(timeHistorial)) {
      setDefaultTimeHistorialStore();
    }
    return fn(...args);
  };
}

function setTimeHistorialStore(time) {
  timeHistorial = time;
}

module.exports = {
  getTimeHistorialStore,
  setTimeHistorialStore: CheckTimeHistorialtore(setTimeHistorialStore),
};
