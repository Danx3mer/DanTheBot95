const { ActionRowBuilder, ButtonStyle } = require("discord.js");

const tools = require("../../../Tools/Tools.js");

module.exports = {
	data: {
		name: 'HoleYes'
	},
	async execute(interaction) {
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
				components: [new ActionRowBuilder().addComponents(
					tools.utility.createButton("100% YES", "HoleYes_DISABLED", interaction.user.id, ButtonStyle.Danger).setDisabled(),
					tools.utility.createButton("NO!!!", "HoleNo_DISABLED", interaction.user.id, ButtonStyle.Success).setDisabled())]
			})
		}
	}
}
