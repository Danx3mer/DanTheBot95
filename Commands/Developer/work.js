const {
	SlashCommandBuilder,
	CommandInteraction
} = require("discord.js");

const tools = require("../../Tools/Tools.js");

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
		const choices = Object.keys(tools.economy.lists.jobs);

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
		tools.economy.register(UID);

		switch (interaction.options.getSubcommand()) {
			case "complete": {
				let work = tools.economy.job.get(UID)
				if (work == null)
					return interaction.reply({ embeds: [tools.utility.createEmbed(`You are unemployed. Go get a job with </work register:1070507644311306310>`)] });

				let res = tools.economy.lists.jobs[work];
				tools.economy.balance.set(UID, res, false);
				return interaction.reply(
					{
						embeds: [
							tools.utility.createEmbed(`Result of your work: +${tools.economy.lists.currencySymbol}${res}`, `${interaction.member.user.username}\'s ${work} job results:`,
								"", "Yay free money :)")]
					})
			}
			case "register": {
				let jobName = interaction.options.getString('job');

				console.log(Object.keys(tools.economy.lists.jobs));
				console.log(jobName);
				if (!(Object.keys(tools.economy.lists.jobs).includes(jobName)))
					return interaction.reply({ embeds: [tools.utility.createEmbed(`Invalid job.`)] });

				tools.economy.job.set(UID, jobName);

				let salary = tools.economy.lists.jobs[interaction.options.getString('job')];
				return interaction.reply(
					{
						embeds: [
							tools.utility.createEmbed(`You are now working as: ${jobName}! Your salary is ${tools.economy.lists.currencySymbol}${salary} per shift.`, `Application accepted!`,
								"", "Yay free money :)")]
					})
			}
		}
	}
};
