const {
	SlashCommandBuilder,
	CommandInteraction
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")
const register = require("../../Economy/Tools/register.js");
const checkRegister = require("../../Economy/Tools/checkForRegister.js");
const getBalance = require("../../Economy/Tools/getBal.js");
const lists = require("../../Economy/Tools/econLists.js");

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
			if (!checkRegister(userID))
				return interaction.reply(
					{
						embeds: [
							createEmbed(`This user wasn't registered into the database yet, meaning that they didn't use this bot yet.`)]
					})

		register(userID);
		var bal = getBalance(userID);
		return interaction.reply(
			{
				embeds: [
					createEmbed(`Pocket Balance: ${lists.currencySymbol}${bal}`, `${userName}\'s BALANCE:`, "")]
			})
	}
};
