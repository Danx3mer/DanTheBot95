const {
  SlashCommandBuilder,
  CommandInteraction,
} = require("discord.js");

const tools = require("../../Tools/Tools.js");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("docs")
    .setDescription("YAY ULTRA 100% SECRET DOCS!"),
  /**
   *
   * @param {CommandInteraction} interaction
   */
  execute(interaction) {
      return interaction.reply({ embeds: [
        tools.utility.createEmbed(`Da Docs: https://discordjs.guide/`, "DJS V14 Docs: ", "", "We all know the docs are poggers ;)")] });
    }
};
