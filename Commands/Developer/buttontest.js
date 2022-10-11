const {
  SlashCommandBuilder,
  CommandInteraction,
  ActionRowBuilder,
  ButtonStyle
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")
const createButton = require("../../Tools/Button.js")

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("buttontest")
    .setDescription("testing buttons, 123"),
  /**
   *
   * @param {CommandInteraction} interaction
   */
  execute(interaction) {
      return interaction.reply(
        { embeds: [
        createEmbed(`henlo`, "button test: ", "", "BUTTONS YAY")], 
         
         components: [new ActionRowBuilder().addComponents(createButton("yes", "hello"),createButton("no", "hi",ButtonStyle.Secondary))]});
    }
};
