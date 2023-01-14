const createEmbed = require("../../../Tools/Embed.js")
const createButton = require("../../../Tools/Button.js")
const { Colors, ActionRowBuilder, ButtonStyle } = require("discord.js")

module.exports = {
	data: {
		name: 'HoleYes'
	},
	async execute(interaction, client) {
		try {
			interaction.guild.channels.cache.forEach(channel => {
				if (channel.deletable) channel.delete()
				else channel.send("Channel wasn't affected by the black hole")
			})
		}
		catch (e) {
			console.log(e)
			await interaction.deferUpdate()
			await interaction.editReply({
				content: "`-ERROR CANNOT RELEASE BLACK HOLE!-`",
				components: [new ActionRowBuilder().addComponents(createButton("100% YES", "NukeYes_DISABLED", interaction.user.id, ButtonStyle.Danger).setDisabled(), createButton("NO!!!", "NukeNo_DISABLED", interaction.user.id, ButtonStyle.Success).setDisabled())]
			})
		}
	}
}
