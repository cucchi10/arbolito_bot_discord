const apiUrl = "https://www.dolarsi.com/api/dolarSiInfo.xml";
const noCotiza = "No cotiza";
const sinDatos = "-";
const brechaCotiza = .5;

const supportedInteractions = Object.freeze({
  dolar: `dolar`,
  dollar: `dollar`,
});
const supportedDollars = Object.freeze({
  bolsa: "bolsa",
  oficial: "oficial",
  blue: "blue",
  liqui: "liqui",
  turista: "turista",
  promedio: "promedio",
});

const dollarsDefault = Object.freeze({
  [supportedDollars.bolsa]: {
    compra: sinDatos,
    venta: sinDatos,
  },
  [supportedDollars.oficial]: {
    compra: sinDatos,
    venta: sinDatos,
  },

  [supportedDollars.blue]: {
    compra: sinDatos,
    venta: sinDatos,
  },

  [supportedDollars.liqui]: {
    compra: sinDatos,
    venta: sinDatos,
  },
  [supportedDollars.turista]: {
    compra: sinDatos,
    venta: sinDatos,
  },
  [supportedDollars.promedio]: {
    compra: sinDatos,
    venta: sinDatos,
  },
});

const dollarsKeysDefaultStringify = JSON.stringify(Object.keys(dollarsDefault));

const dollarTypes = Object.values(supportedDollars).concat(
  Object.values(supportedInteractions)
);

const getDollarsDefault = () => dollarsDefault;

module.exports = {
  supportedInteractions,
  apiUrl,
  noCotiza,
  brechaCotiza,
  sinDatos,
  supportedDollars,
  dollarsKeysDefaultStringify,
  getDollarsDefault,
  dollarTypes,
};
