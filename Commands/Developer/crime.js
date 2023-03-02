const {
	SlashCommandBuilder,
	CommandInteraction
} = require("discord.js");

const tools = require("../../Tools/Tools.js");

module.exports = {
	developer: true,
	data: new SlashCommandBuilder()
		.setName("crime")
		.setDescription("Commit a crime (illegal)"),
	/**
	 *
	 * @param {CommandInteraction} interaction
	 */
	execute(interaction) {
		const UID = interaction.member.id
		do {
			tools.economy.register(UID);
		} while (!tools.economy.checkRegister(UID));

		let res = Math.round(Math.random() * 400) - 200
		tools.economy.balance.set(UID, res, false)

		let desc = ``
		let title = ``
		let footer = ""

		let crime = tools.economy.lists.getRandomCrime(res > 0)
		let crimeName = Object.keys(crime)[0]
		let crimeReason = Object.values(crime)[0]

		if (res < 0) {
			desc = `You failed to commit ${crimeName} because ${crimeReason}, and lost ${tools.economy.lists.currencySymbol}${Math.abs(res)}`
			title = `${interaction.member.user.username}\'s failure at ${crimeName}`
			footer = "YOU LITTLE FAILURE"
		}
		else if (res > 0) {
			desc = `You succeded in committing ${crimeName} because ${crimeReason}, and somehow got ${tools.economy.lists.currencySymbol}${Math.abs(res)}`
			title = `${interaction.member.user.username}\'s success at ${crimeName}`
			footer = "Wait... but thats illegal isn't it?"
		}
		else {
			desc = `You succeded in doing nothing, and got nothing!`
			title = `${interaction.member.user.username}\'s wierd crime`
			footer = "This is rare wow"
		}

		return interaction.reply({
			embeds: [tools.utility.createEmbed(desc, title, "", footer)]
		}
		)
	}
};
