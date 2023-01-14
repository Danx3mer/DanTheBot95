const {
	SlashCommandBuilder,
	CommandInteraction,
	ActionRowBuilder,
	ButtonStyle,
	PermissionFlagsBits,
	Colors
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")
const createButton = require("../../Tools/Button.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("blackhole")
		.setDescription("DESTROY THE WHOLE SERVER!!!")
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	/**
	 *
	 * @param {CommandInteraction} interaction
	 */
	execute(interaction) {
		if (interaction.member.id != interaction.guild.ownerId)
			return interaction.reply(
				{
					embeds:
						[createEmbed(`Stop Trying to Delete The Server`,
							"ONLY THE SERVER OWNER COULD RELEASE A BLACK HOLE INTO THE SERVER!",
							"",
							"WARNING!!! THIS WILL DELETE ALL OF THE CHANNELS IN THE SERVER. THIS IS IRREVERSIBLE!!!",
							Colors.Red)],
				});

		return interaction.reply(
			{
				embeds: [
					createEmbed(`THIS ACTION IS IRREVERSIBLE!!!`,
						"ARE YOU SURE THAT YOU WANT TO RELEASE A BLACK HOLE INTO THE SERVER?",
						"",
						"WARNING!!! THIS WILL DELETE ALL OF THE CHANNELS IN THE SERVER. THIS IS IRREVERSIBLE!!!",
				Colors.Red)],

				components: [new ActionRowBuilder().addComponents(createButton("100% YES", "HoleYes", interaction.user.id, ButtonStyle.Danger), createButton("NO!!!", "HoleNo", interaction.user.id, ButtonStyle.Success))]
			});
	}
};
