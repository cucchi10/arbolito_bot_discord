const { get } = require("../api");
const { xml2json } = require("xml-js");
const { getDollarsStore, setDollarsStore } = require("../store");
const { formatNumber, extractedData } = require("../utils");
const { apiUrl, supportedDollars } = require("../constants");

async function getRawData() {
  try {
    const { data } = await get(apiUrl);
    const parseData = JSON.parse(
      xml2json(data, {
        compact: true,
        spaces: 4,
      })
    );
    return parseData.cotiza;
  } catch (error) {
    console.log(error);
    return null;
  }
}

function formattingDollars(data) {
  const {
    bolsaCompra,
    bolsaVenta,
    oficialCompra,
    oficialVenta,
    blueCompra,
    blueVenta,
    liquiCompra,
    liquiVenta,
    turistaCompra,
    turistaVenta,
    promedioCompra,
    promedioVenta,
  } = extractedData(data);
  return {
    [supportedDollars.bolsa]: {
      compra: formatNumber(bolsaCompra),
      venta: formatNumber(bolsaVenta),
    },
    [supportedDollars.oficial]: {
      compra: formatNumber(oficialCompra),
      venta: formatNumber(oficialVenta),
    },

    [supportedDollars.blue]: {
      compra: formatNumber(blueCompra),
      venta: formatNumber(blueVenta),
    },

    [supportedDollars.liqui]: {
      compra: formatNumber(liquiCompra),
      venta: formatNumber(liquiVenta),
    },
    [supportedDollars.turista]: {
      compra: formatNumber(turistaCompra),
      venta: formatNumber(turistaVenta),
    },
    [supportedDollars.promedio]: {
      compra: formatNumber(promedioCompra),
      venta: formatNumber(promedioVenta),
    },
  };
}

async function getInfoDolar() {
  try {
    const result = await getRawData();
    if (!result) throw new Error();
    const formatedData = formattingDollars(result);
    setDollarsStore(formatedData);
    return formatedData;
  } catch (error) {
    console.log(error);
    return null;
  }
}

function getDollars() {
  return getDollarsStore();
}

module.exports = { getDollars, getInfoDolar };
