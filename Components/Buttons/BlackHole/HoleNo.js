const {
	ActionRowBuilder,
	ButtonStyle
} = require("discord.js");

const tools = require("../../../Tools/Tools.js");

module.exports = {
	data: {
		name: 'HoleNo'
	},
	async execute(interaction) {
		try {
			await interaction.deferUpdate()
			await interaction.editReply({
				content: `Phew!`,
				components: [new ActionRowBuilder()
					.addComponents(
						tools.utility.createButton("100% YES", "HoleYes_DISABLED", interaction.user.id, ButtonStyle.Danger).setDisabled(),
						tools.utility.createButton("NO!!!",	"HoleNo_DISABLED", interaction.user.id,	ButtonStyle.Success).setDisabled())]
			})
		} catch (e) {}
	}
}
