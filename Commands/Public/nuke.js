const {
	SlashCommandBuilder,
	CommandInteraction,
	ActionRowBuilder,
	ButtonStyle,
	PermissionFlagsBits
} = require("discord.js");

const tools = require("../../Tools/Tools.js");

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
		return interaction.reply(
			{
				embeds: [
					tools.utility.createEmbed(`THIS ACTION IS IRREVERSIBLE!!!`, "ARE YOU SURE THAT YOU WANT TO NUKE THIS CHANNEL?", "", "WARNING!!! THIS WILL DELETE THE WHOLE CHANNEL. THIS IS IRREVERSIBLE!!!")],

				components: [new ActionRowBuilder().addComponents(
					tools.utility.createButton("100% YES", "NukeYes", interaction.user.id, ButtonStyle.Danger),
					tools.utility.createButton("NO!!!", "NukeNo", interaction.user.id, ButtonStyle.Success))]
			});
	}
}

