const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	developer: true,
	data: new SlashCommandBuilder()
		.setName("autocomplete")
		.setDescription("Returns autocomplete.")
		.addStringOption((option) =>
			option.setName("color")
				.setDescription("A color based on autocomplete")
				.setAutocomplete(true)
				.setRequired(true)
		),

	async autocomplete(interaction) {
		const focusedValue = interaction.options.getFocused();
		const choices = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

		const filtered = choices.filter(choice => choice.startsWith(focusedValue));
		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
	},

	async execute(interaction) {
		const option = interaction.options.getString("color");
		return await interaction.reply({ content: `You told me, \"${option}\"` })
	}
}