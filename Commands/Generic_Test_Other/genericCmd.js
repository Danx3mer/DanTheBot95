const {
  SlashCommandBuilder,
  CommandInteraction
} = require("discord.js");

module.exports = {
	inDev: true,
	developer: true,
  data: new SlashCommandBuilder()
    .setName("genericname")
    .setDescription("Generic Desciption"),
	/**
   *
   * @param {CommandInteraction} interaction
   */
  execute(interaction) {

  },
};
