require("dotenv").config({ path: "deploy/.env" });
const credentials = Object.freeze({
  botToken: process.env.BOT_TOKEN,
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID,
  guildIds: process.env.GUILD_IDS?.split(","),
});

module.exports = {
  credentials,
};
