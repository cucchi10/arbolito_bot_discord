const { getInfoDolar, getDollars } = require("../service");
const { dollarTypes } = require("../constants");
const {
  convertToLowerCase,
  buildTable,
  formatDataTable,
  comparePrices,
} = require("../utils");

let client;
let messageSaved;

function captureClient(newClient) {
  try {
    client = newClient;
  } catch (error) {
    return;
  }
}

function sendMessage(message, data) {
  try {
    const formatedData = formatDataTable(data);
    const table = buildTable(formatedData);
    message.channel.send(`\`\`\`${table}\`\`\``);
    // tables.forEach((table) => {
    //   message.channel.send(`\`\`\`${table}\`\`\``);
    // });
  } catch (error) {
    return;
  }
}

function handleMessage(message) {
  try {
    messageSaved = message;
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
    replyFunction(interaction, "**Los precios del dolar son: **");
    sendMessage(interaction, result);
  } catch (error) {
    return;
  }
}

async function sendPriceDollar() {
  try {
    const oldsDollars = getDollars();
    const result = await getInfoDolar();
    const isNeedSay = comparePrices(oldsDollars, result);
    if (!messageSaved || !isNeedSay) return;
    messageSaved.channel.send("**Los precios del dolar son: **");
    sendMessage(messageSaved, result);
  } catch (error) {
    return;
  }
}

module.exports = {
  sendPriceDollar,
  captureClient,
  sendIteraction,
  handleMessage,
};
