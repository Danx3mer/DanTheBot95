const {
	SlashCommandBuilder,
	CommandInteraction
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")
const checkRegister = require("../../Economy/Tools/checkForRegister.js");
const register = require("../../Economy/Tools/register.js");
const setBal = require("../../Economy/Tools/updateBal.js");
const lists = require("../../Economy/Tools/econLists.js");

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
			register(UID);
		} while(!checkRegister(UID));
		
		let res = Math.round(Math.random() * 400) - 200
		setBal(UID, res, false)
		
		let desc = ``
		let title = ``
		let footer = ""
		
		let crime = lists.getRandomCrime(res>0)
		let crimeName = Object.keys(crime)[0]
		let crimeReason = Object.values(crime)[0]
		
		if(res<0) {
			desc = `You failed to commit ${crimeName} because ${crimeReason}, and lost ${lists.currencySymbol}${Math.abs(res)}`
			title = `${interaction.member.user.username}\'s failure at ${crimeName}`
			footer = "YOU LITTLE FAILURE"
		}
		else if(res>0) {
			desc = `You succeded in committing ${crimeName} because ${crimeReason}, and somehow got ${lists.currencySymbol}${Math.abs(res)}`
			title = `${interaction.member.user.username}\'s success at ${crimeName}`
			footer = "Wait... but thats illegal isn't it?"
		}
		else {
			desc = `You succeded in doing nothing, and got nothing!`
			title = `${interaction.member.user.username}\'s wierd crime`
			footer = "This is rare wow"
		}
		
		/*return interaction.reply(
			{
				embeds: [
					createEmbed(`Result of crime: ${sign}${res}`, `${interaction.member.user.username}\'s crime results:`,
						"", "Wait... but thats illegal isn't it?")]
			})*/
		
		return interaction.reply({
				embeds: [createEmbed(desc, title, "", footer)]
			}
		)
	}
};
