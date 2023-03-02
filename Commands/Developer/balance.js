const {
	SlashCommandBuilder,
	CommandInteraction
} = require("discord.js");

const tools = require("../../Tools/Tools.js");

module.exports = {
	developer: true,
	data: new SlashCommandBuilder()
		.setName("balance")
		.setDescription("Check your balance!")
		.addUserOption(option =>
			option.setName('user')
				.setDescription('The user who\'s balance you would like to see (If not yours).')),
	/**
	 *
	 * @param {CommandInteraction} interaction
	 */
	execute(interaction) {
		var userID
		var userName

		if (interaction.options.getUser('user') == null) {
			userID = interaction.member.id
			userName = interaction.member.user.username
		}
		else {
			userID = interaction.options.getUser('user').id
			userName = interaction.options.getUser('user').username
		}

		if (userID != interaction.member.id)
			if (!tools.economy.checkRegister(userID))
				return interaction.reply(
					{
						embeds: [
							tools.utility.createEmbed(`This user wasn't registered into the database yet, meaning that they didn't use this bot yet.`)]
					})

		tools.economy.register(userID);
		var bal = tools.economy.balance.get(userID);
		return interaction.reply(
			{
				embeds: [
					tools.utility.createEmbed(`Pocket Balance: ${tools.economy.lists.currencySymbol}${bal}`, `${userName}\'s BALANCE:`, "")]
			})
	}
};
