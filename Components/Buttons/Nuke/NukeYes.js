const { Colors, ActionRowBuilder, ButtonStyle } = require("discord.js")

const tools = require("../../../Tools/Tools.js");

module.exports = {
	data: {
		name: 'NukeYes'
	},
	async execute(interaction) {
		try {
			if (!interaction.channel.deletable)
				throw new Error('Channel isn\'t deletable!')
			
			interaction.channel.clone().then(channel => {
				var embed = tools.utility.createEmbed("CHANEL WAS NUKED!!! *RIP*. NUKER: <@" + interaction.member + ">.", "NUKE!!!", "", "Channel go boom lol.", Colors.Red, null, image)
				channel.send({ embeds: [embed] })
			});
			interaction.channel.delete();
		}
		catch (e) {
			await interaction.deferUpdate()
			await interaction.editReply({
				content: "`CANNOT NUKE THE CHANNEL!`",
				components: [new ActionRowBuilder().addComponents(
					tools.utility.createButton("100% YES", "NukeYes_DISABLED", interaction.user.id, ButtonStyle.Danger).setDisabled(),
					tools.utility.createButton("NO!!!", "NukeNo_DISABLED", interaction.user.id, ButtonStyle.Success).setDisabled())]
			})
		}
	}
}
