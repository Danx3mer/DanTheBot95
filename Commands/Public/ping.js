const {
  SlashCommandBuilder,
  CommandInteraction
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Gives you information about the status of the bot."),
  /**
   *
   * @param {CommandInteraction} interaction
   */
  execute(interaction) {
    interaction.channel.send("Pinging...").then((pingBoi) => {
      pingBoi.delete();
      interaction.reply({ embeds: [
        createEmbed(`Bot ping is: ${pingBoi.createdTimestamp - interaction.createdTimestamp} ms.`, "Ping: ")] });
    });
  },
};
