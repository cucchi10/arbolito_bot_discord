const {
  getTimeHistorialStore,
  setTimeHistorialStore,
  addHistorialStore,
  getHistorialStore,
  getLengthHistorialStore,
  deleteOneHistorialStore,
} = require("../store");
const { getDiference } = require("../utils");
const { maxLengthHistotial, diferenceTimeHistorial } = require("../constants");
function interactionHistorial(store) {
  try {
    const oldTime = getTimeHistorialStore();
    const newTime = Date.now();
    const diferenceTimes = getDiference(oldTime, newTime);
    if (diferenceTimes > diferenceTimeHistorial) {
      const actualLength = getLengthHistorialStore();
      if (actualLength >= maxLengthHistotial) {
        deleteOneHistorialStore();
      }
      addHistorialStore(store);
    }
    setTimeHistorialStore(newTime);
  } catch (error) {
    return;
  }
}

function getHistorial() {
  return getHistorialStore();
}

module.exports = {
  interactionHistorial,
  getHistorial,
};
