module.exports = {
	data: {
		name: "userinstall",
		description: "Test user-installed command",
		"integration_types": [0, 1], //0 for guild, 1 for user
		"contexts": [0, 1, 2], //0 for guild, 1 for app DMs, 2 for GDMs and other DMs
	},
	async execute (interaction) {
		await interaction.reply({ content: "User-installed command test", ephemeral: true })
	}
}