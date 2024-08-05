const {
	ActionRowBuilder,
	ButtonStyle,
	Colors
} = require("discord.js");

const createEmbed = require("../../../Tools/Embed.js")
const readFromJson = require("../../../Tools/ReadJson.js")
const createButton = require("../../../Tools/Button.js")

module.exports = {
	data: {
		name: 'Help1.1ModCont'
	},
	async execute(interaction, client) {
		try {
			const version = readFromJson("../config.json", "version")
			await interaction.deferUpdate()
			await interaction.editReply({
				embeds: [createEmbed("**(Moderation Commands Continued)**", "Commands:", "", `Bot Version: ${version}`, Colors.DarkOrange, [
					[{
						name: "</lock:1241561416075313248>",
						value: "**Description**: Locks the specified channel so that only moderators can type.\n" +
							"**Usage**: /lock [channel] [lock]" +
							"\n**Permissions Required:** MANAGE SERVER" +
							"\n\n **Arguments:**" +
							"\n *[channel]*: The channel that you want to lock down. If not specified the channel that this command was sent in will be locked down. (Optional)" +
							"\n *[lock]*: The reason that you want to lock the channel down. (Optional)"
					}],
					[{
						name: "</unlock:1241561416075313253>",
						value: "**Description**: Unlocks the specified channel so that everyone can type.\n" +
							"**Usage**: /unlock [channel]" +
							"\n**Permissions Required:** MANAGE SERVER" +
							"\n\n **Arguments:**" +
							"\n *[channel]*: The channel that you want to unlock. If not specified the channel that this command was sent in will be unlocked. (Optional)"
					}],
					[{
						name: "</nuke:1241561416075313249>",
						value: "**Description**: NUKE THE CHANNEL!!! Makes a new channel with the same name and deletes the current one. Prompts you if you are sure." +
							"\n**Usage**: /nuke" +
							"\n**Permissions Required:** ADMINISTRATOR"
					}],
					[{
						name: "</blackhole:1241561416075313245>",
						value: "**Description**: DESTROYS THE SERVER!!! Deletes most of the channels in the server. Not Recommended AT ALL. Prompts you if you are sure." +
							"\n**Usage**: /blackhole" +
							"\n**Permissions Required:** OWNER"
					}],
				])],

				components: [new ActionRowBuilder().addComponents(
					createButton("Back", "Help1Mod", interaction.user.id, ButtonStyle.Primary),
					createButton("Forward", "Help2Fun", interaction.user.id, ButtonStyle.Primary))]
			})
		} catch (e) { }
	}
}
