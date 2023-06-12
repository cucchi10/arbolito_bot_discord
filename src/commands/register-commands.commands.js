const { SlashCommandBuilder, Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");
const {
  credentials: { botToken, clientId, guildId, guildIds },
  supportedInteractions,
} = require("../constants/");

async function registerCommands() {
  const searchDollar = new SlashCommandBuilder()
    .setName(supportedInteractions.dollar)
    .setDescription("Ver los tipos de cambio del dolar!");

  const rest = new REST({ version: "10" }).setToken(botToken);

  const commands = [searchDollar].map((command) => command.toJSON());

  await rest
    .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log("Successfully registered application commands."))
    .catch(console.error);

  // await Promise.allSettled(
  //   guildIds.map((guildId) =>
  //     rest
  //       .put(Routes.applicationGuildCommands(clientId, guildId), {
  //         body: commands,
  //       })
  //       .then(() =>
  //         console.log(
  //           `Successfully registered application commands for guild: ${guildId}`
  //         )
  //       )
  //       .catch((error) =>
  //         console.error(
  //           `Failed to register application commands for guild: ${guildId}`,
  //           error
  //         )
  //       )
  //   )
  // );
}

exports.registerCommands = registerCommands;
