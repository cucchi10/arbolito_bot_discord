const {
  getHistorial,
  interactionHistorial,
  getInfoDolar,
  getDollars,
  setClient,
  getChannel,
  setChannel,
} = require("../service");
const { dollarTypes } = require("../constants");
const {
  convertToLowerCase,
  buildTable,
  formatDataTable,
  comparePrices,
  samePrices,
} = require("../utils");

function captureClient(newClient) {
  try {
    if (!newClient) return;
    setClient(newClient);
  } catch (error) {
    return;
  }
}

function captureChannel(message) {
  try {
    if (!message) return;
    setChannel(message);
  } catch (error) {
    return;
  }
}

function sendMessage(message, data, replyFunction = null) {
  try {
    const formatedData = formatDataTable(data);
    const table = buildTable(formatedData);
    if (replyFunction) {
      replyFunction(message, `\`\`\`${table}\`\`\``);
    } else {
      message.channel.send(`\`\`\`${table}\`\`\``);
    }
  } catch (error) {
    return;
  }
}

function handleMessage(message) {
  try {
    if (!message) return;
    const messageLower = convertToLowerCase(message.content);
    const findMessage = dollarTypes.find(
      (type) => !!messageLower.includes(type)
    );
    if (!findMessage) return;
    const result = getDollars();
    const isSelectDollar = result[findMessage] ?? false;
    message.reply(
      `**Los precios del dolar ${
        isSelectDollar ? findMessage + " " : ""
      }son: **`
    );
    isSelectDollar
      ? sendMessage(message, { [findMessage]: isSelectDollar })
      : sendMessage(message, result);
  } catch (error) {
    return;
  }
}

function sendIteraction(interaction, replyFunction) {
  try {
    const result = getDollars();
    sendMessage(interaction, result, replyFunction);
  } catch (error) {
    return;
  }
}

async function sendPriceDollar() {
  try {
    const oldsDollars = getHistorial();
    const oldDollars = getDollars();
    const result = await getInfoDolar();
    if (!result) return;
    const { isNeedSay, dollarsBrecha } = comparePrices(oldsDollars, result);
    const { isSamePrice, dollarsVariations } = samePrices(
      oldDollars,
      dollarsBrecha
    );
    interactionHistorial(result);
    const messageSaved = getChannel();
    if (!messageSaved || !isNeedSay || isSamePrice) return;
    messageSaved.channel.send("**Los precios del dolar son: **");
    sendMessage(messageSaved, result);
    messageSaved.channel.send("**Las variaciones fueron en: **");
    sendMessage(messageSaved, dollarsVariations);
  } catch (error) {
    console.log(error);
    return;
  }
}

module.exports = {
  sendPriceDollar,
  captureClient,
  sendIteraction,
  handleMessage,
  captureChannel,
};
