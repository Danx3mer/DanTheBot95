const {
	ActionRowBuilder,
	ButtonStyle
} = require("discord.js");

const tools = require("../../../Tools/Tools.js");

module.exports = {
	data: {
		name: 'NukeNo'
	},
	async execute(interaction, client) {
		try {
			await interaction.deferUpdate()
			await interaction.editReply({
				content: `Phew!`,
				components: [new ActionRowBuilder().addComponents(
					tools.utility.createButton("100% YES", "NukeYes_DISABLED", interaction.user.id, ButtonStyle.Danger).setDisabled(),
					tools.utility.createButton("NO!!!", "NukeNo_DISABLED", interaction.user.id, ButtonStyle.Success).setDisabled())]
			})
		} catch (e) { }
	}
}
