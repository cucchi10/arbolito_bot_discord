const {
  credentials: { botToken },
} = require("./src/constants");
const { initCron } = require("./src/jobs");
const { handleMessage } = require("./src/controller");
const {
  registerCommands,
  NoCommand,
  SearchDollarCommand,
} = require("./src/commands");

// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const commandHandler = new SearchDollarCommand(new NoCommand(null));

// When the client is ready, run this code (only once)
client.once("ready", async () => {
  await registerCommands();
  initCron(client);
  console.log("Ready!");
});

client.on("messageCreate", async (message) => {
  try {
    if (!!message.author.bot) return;
    handleMessage(message);
  } catch (error) {
    console.error(error);
    return;
  }
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isChatInputCommand()) {
    commandHandler.handleInteraction(interaction);
  }
});

// Login to Discord with your client's token
client.login(botToken);
