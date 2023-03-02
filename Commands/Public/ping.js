const {
	SlashCommandBuilder,
	CommandInteraction
} = require("discord.js");

const tools = require("../../Tools/Tools.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Gives you information about the status of the bot."),
	/**
	 *
	 * @param {CommandInteraction} interaction
	 */
	execute(interaction) {
		const version = tools.utility.json.read("config.json", "version");

		interaction.channel.send("Pinging...").then((pingBoi) => {
			pingBoi.delete();
			interaction.reply({
				embeds: [
					tools.utility.createEmbed(`Bot ping is: ${pingBoi.createdTimestamp - interaction.createdTimestamp} ms.`, "Ping: ", "", `Bot Version: ${version}`)]
			});
		});
	},
};
