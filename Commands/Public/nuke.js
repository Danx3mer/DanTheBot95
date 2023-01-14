const {
  SlashCommandBuilder,
  CommandInteraction,
  ActionRowBuilder,
  ButtonStyle,
	PermissionFlagsBits
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")
const createButton = require("../../Tools/Button.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nuke")
    .setDescription("NUKE DA CHANNEL!!!")
	.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  /**
   *
   * @param {CommandInteraction} interaction
   */
  execute(interaction) {
      return interaction.reply (
        { embeds: [
        createEmbed(`THIS ACTION IS IRREVERSIBLE!!!`, "ARE YOU SURE THAT YOU WANT TO NUKE THIS CHANNEL?", "", "WARNING!!! THIS WILL DELETE THE WHOLE CHANNEL. THIS IS IRREVERSIBLE!!!")], 
         
         components: [new ActionRowBuilder().addComponents(createButton("100% YES", "NukeYes",interaction.user.id,ButtonStyle.Danger),createButton("NO!!!", "NukeNo",interaction.user.id,ButtonStyle.Success))]});
    }
};
