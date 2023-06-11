const { Command } = require("./command");
const { sendIteraction } = require("../controller");
const { supportedInteractions } = require("../constants");

class SearchDollarCommand extends Command {
  constructor(command) {
    super(command);
  }

  async handleInteraction(interaction) {
    const interactionName = interaction.commandName;
    if (interactionName === supportedInteractions.dollar) {
      try {
        sendIteraction(interaction, Command.reply);
      } catch (error) {
        Command.reply(interaction, error.message);
      }
    } else {
      this.nextCommand.handleInteraction(interaction);
    }
  }
}

exports.SearchDollarCommand = SearchDollarCommand;
