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
		name: 'Help3User'
	},
	async execute(interaction, client) {
		const version = readFromJson("../config.json", "version")
		try {
			await interaction.deferUpdate()
			await interaction.editReply({
				embeds: [createEmbed("**(User-Installed Commands)**", "Commands:", "Notice: These are only available if you install the app to your discord account via clicking add app and then selecting try it now!", `Bot Version: ${version}`, Colors.Green, [
					[{
						name: "</userinstall:1241570559704170556>",
						value: "**Description**: A currently in-development user-installable command!" +
							"\n **Usage**: /userinstall"
					}],
				])],

				components: [new ActionRowBuilder().addComponents(
					createButton("Back", "Help2Fun", interaction.user.id, ButtonStyle.Primary),
					createButton("Forward", "Help0General", interaction.user.id, ButtonStyle.Primary))]
			})
		} catch (e) {}
	}
}
