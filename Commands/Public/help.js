const {
	SlashCommandBuilder,
	CommandInteraction,
	Colors,
	ActionRowBuilder,
	ButtonStyle
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")
const readFromJson = require("../../Tools/ReadJson.js")
const createButton = require("../../Tools/Button.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("help")
		.setDescription("Tells you information about all of the commands in the bot"),
	/**
	 *
	 * @param {CommandInteraction} interaction
	 */
	execute(interaction) {
		const version = readFromJson("../config.json", "version")

		return interaction.reply({
			embeds: [createEmbed("**(General Commands)**", "Commands:", "", `Bot Version: ${version}`, Colors.Blue, [
				//Add a field for each command that will be added
				[{
					name: "</help:1241561416075313246>",
					value: "**Description**: The command you are using right now. Tells you information about all of the commands in the bot." +
						"\n **Usage**: /help"
				}],
				[{
					name: "</ping:1241561416075313250>",
					value: "**Description**: Gives you information about the status of the bot." +
						"\n **Usage**: /ping"
				}],
			])],

			components: [new ActionRowBuilder().addComponents(
				createButton("Back", "Help3User", interaction.user.id, ButtonStyle.Primary),
				createButton("Forward", "Help1Mod", interaction.user.id, ButtonStyle.Primary))]
		})
	},
};
