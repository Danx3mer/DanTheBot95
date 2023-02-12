const {
  SlashCommandBuilder,
  CommandInteraction
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")
const readFromJson = require("../../Tools/ReadJson.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Gives you information about the status of the bot."),
  /**
   *
   * @param {CommandInteraction} interaction
   */
  execute(interaction) {
		const version = readFromJson("../config.json")["version"]
		
    interaction.channel.send("Pinging...").then((pingBoi) => {
      pingBoi.delete();
      interaction.reply({ embeds: [
        createEmbed(`Bot ping is: ${pingBoi.createdTimestamp - interaction.createdTimestamp} ms.`, "Ping: ", "", `Bot Version: ${version}`)] });
    });
  },
};
