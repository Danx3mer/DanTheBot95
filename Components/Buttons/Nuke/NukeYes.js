const createEmbed = require("../../../Tools/Embed.js")
const createButton = require("../../../Tools/Button.js")
const { Colors, ActionRowBuilder, ButtonStyle } = require("discord.js")

module.exports = {
	data: {
		name: 'NukeYes'
	},
	async execute(interaction, client) {
		try {
			if (!interaction.channel.deletable)
				throw new Error('Channel isn\'t deletable!')

			interaction.channel.clone().then(channel => {
				var embed = createEmbed("CHANEL WAS NUKED!!! *RIP*. NUKER: <@" + interaction.member + ">.", "NUKE!!!", "", "Channel go boom lol.", Colors.Red, null, 'https://i.gifer.com/6Ip.gif')
				channel.send({ embeds: [embed] })
			});
			interaction.channel.delete();
		}
		catch (e) {
			await interaction.deferUpdate()
			await interaction.editReply({
				content: "`CANNOT NUKE THE CHANNEL!`",
				components: [new ActionRowBuilder().addComponents(createButton("100% YES", "NukeYes_DISABLED", interaction.user.id, ButtonStyle.Danger).setDisabled(), createButton("NO!!!", "NukeNo_DISABLED", interaction.user.id, ButtonStyle.Success).setDisabled())]
			})
		}
	}
}
