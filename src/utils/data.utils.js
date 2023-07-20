function extractedData({ Dolar, cotizador, valores_principales }) {
  return {
    bolsaCompra: valores_principales?.casa313?.compra?._text,
    bolsaVenta: valores_principales?.casa313?.venta?._text,

    oficialCompra: Dolar?.casa344?.compra?._text,
    oficialVenta: Dolar?.casa344?.venta?._text,

    blueCompra: Dolar?.casa380?.compra?._text,
    blueVenta: Dolar?.casa380?.venta?._text,

    // oficialCompra: valor_general_dolar?.oficial?.Capital_federal?.compra?._text,
    // oficialVenta: valor_general_dolar?.oficial?.Capital_federal?.venta?._text,

    // blueCompra: valor_general_dolar?.blue?.compra?._text,
    // blueVenta: valor_general_dolar?.blue?.venta?._text,

    liquiCompra: valores_principales?.casa312?.compra?._text,
    liquiVenta: valores_principales?.casa312?.venta?._text,

    turistaCompra: valores_principales?.casa406?.compra?._text,
    turistaVenta: valores_principales?.casa406?.venta?._text,

    promedioCompra: cotizador?.casa302?.compra?._text,
    promedioVenta: cotizador?.casa302?.venta?._text,
  };
}

function formatDataTable(data) {
  return Object.entries(data).map(([dollar, values]) => ({
    dollar,
    ...values,
  }));
}

module.exports = {
  extractedData,
  formatDataTable,
};
