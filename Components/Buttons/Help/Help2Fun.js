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
		name: 'Help2Fun'
	},
	async execute(interaction, client) {
		try {
			const version = readFromJson("../config.json", "version")
			await interaction.deferUpdate()
			await interaction.editReply({
				embeds: [createEmbed("**(Fun Commands)**", "Commands:", "", `Bot Version: ${version}`, Colors.Yellow, [
					[{
						name: "</rate howpog:1241561416075313251> [Part of /rate commands]",
						value: "**Description**: Find out how pog you are!\n" +
							"**Usage**: /rate howpog"
					}],
					[{
						name: "</rate epicgamer:1241561416075313251> [Part of /rate commands]",
						value: "**Description**: Find out how epic gamer you are!\n" +
							"**Usage**: /rate epicgamer"
					}],
					[{
						name: "</rate brain:1241561416075313251> [Part of /rate commands]",
						value: "**Description**: Find out how many brain cells you have!\n" +
							"**Usage**: /rate brain"
					}],
				])],

				components: [new ActionRowBuilder().addComponents(
					createButton("Back", "Help1.1ModCont", interaction.user.id, ButtonStyle.Primary),
					createButton("Forward", "Help3User", interaction.user.id, ButtonStyle.Primary))]
			})
		} catch (e) { console.error("error in Help2Fun.js", e) }
	}
}
