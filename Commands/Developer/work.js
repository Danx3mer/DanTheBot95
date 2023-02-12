const {
	SlashCommandBuilder,
	CommandInteraction
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")
const register = require("../../Economy/Tools/register.js");
const setBal = require("../../Economy/Tools/updateBal.js");
const getWork = require("../../Economy/Tools/getWork.js");
const setWork = require("../../Economy/Tools/setWork.js");
const lists = require("../../Economy/Tools/econLists.js");

module.exports = {
	developer: true,
	data: new SlashCommandBuilder()
		.setName("work")
		.setDescription("Go get a real job smh")

		.addSubcommand((options) =>
			options.setName("complete")
				.setDescription("Go to work!")
		)

		.addSubcommand((options) =>
			options.setName("register")
				.setDescription("Register for a job.")

				.addStringOption(option =>
					option.setName('job')
						.setDescription('The job that you are applying to')
						.setAutocomplete(true)
						.setRequired(true)
				)
		),

	async autocomplete(interaction) {
		const focusedValue = interaction.options.getFocused();
		const choices = Object.keys(lists.jobs);

		const filtered = choices.filter(choice => choice.startsWith(focusedValue));
		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
	},

	/**
	 *
	 * @param {CommandInteraction} interaction
	 */
	execute(interaction) {
		const UID = interaction.member.id
		register(UID);

		switch (interaction.options.getSubcommand()) {
			case "complete": {
				let work = getWork(UID)
				if(work == null)
					return interaction.reply({ embeds: [createEmbed(`You are unemployed. Go get a job with </work register:1070507644311306310>`)] });

				let res = lists.jobs[work];
				setBal(UID, res, false);
				return interaction.reply(
					{
						embeds: [
							createEmbed(`Result of your work: +${lists.currencySymbol}${res}`, `${interaction.member.user.username}\'s ${work} job results:`,
								"", "Yay free money :)")]
					})
			}
			case "register": {
				let jobName = interaction.options.getString('job');

				console.log(Object.keys(lists.jobs));
				console.log(jobName);
				if (!(Object.keys(lists.jobs).includes(jobName)))
					return interaction.reply({ embeds: [createEmbed(`Invalid job.`)] });
				
				setWork(UID, jobName);
				
				let salary = lists.jobs[interaction.options.getString('job')];
				return interaction.reply(
					{
						embeds: [
							createEmbed(`You are now working as: ${jobName}! Your salary is ${lists.currencySymbol}${salary} per shift.`, `Application accepted!`,
								"", "Yay free money :)")]
					})
			}
		}
	}
};
