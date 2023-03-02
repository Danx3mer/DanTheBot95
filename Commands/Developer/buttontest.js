const {
	SlashCommandBuilder,
	CommandInteraction,
	ActionRowBuilder,
	ButtonStyle
} = require("discord.js");

const tools = require("../../Tools/Tools.js");

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
			{
				embeds: [
					tools.utility.createEmbed(`henlo`, "button test: ", "", "BUTTONS YAY")],
				components: [new ActionRowBuilder().addComponents(tools.utility.createButton("yes", "hello"),
					tools.utility.createButton("no", "hi", ButtonStyle.Secondary))]
			});
	}
};
