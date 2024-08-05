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
		name: 'Help1Mod'
	},
	async execute(interaction, client) {
		try {
			const version = readFromJson("../config.json", "version")
			await interaction.deferUpdate()
			await interaction.editReply({
				embeds: [createEmbed("**(Moderation Commands)**", "Commands:", "", `Bot Version: ${version}`, Colors.Red, [
					[{
						name: "</ban:1241561416075313244>",
						value: "**Description**: Bans a member. \n" +
							"**Usage**: /ban <member> [reason] " +
							"\n**Permissions Required:** MANAGE SERVER" +
							"\n\n **Arguments:**" +
							"\n *<member>*: The member to be banned (Required)" +
							"\n *[reason]*: The reason that you want to ban the member (Optional)" + "\n"
					}],
					[{
						name: "</kick:1241561416075313247>",
						value: "**Description**: Kicks a member. \n" +
							"**Usage**: /kick <member> [reason] " +
							"\n**Permissions Required:** MANAGE SERVER" +
							"\n\n **Arguments:**" +
							"\n *<member>*: The member to be kicked (Required)" +
							"\n *[reason]*: The reason that you want to kick the member (Optional)" + "\n"
					}],
					[{
						name: "</timeout:1241561416075313252>",
						value: "**Description**: Timeouts a member.\n" +
							"**Usage**: /timeout <member> <time> [reason] " +
							"\n**Permissions Required:** MANAGE SERVER" +
							"\n\n **Arguments:**" +
							"\n *<member>*: The member to be timed out (Required)" +
							"\n *<time>*: The amount of minutes to timeout the specified member. (Required)" +
							"\n *[reason]*: The reason that you want to timeout the member. (Optional)" + "\n"
					}],
					[{
						name: "</untimeout:1241561416226312233>",
						value: "**Description**: Removes timeout from an already timed out member.\n" +
							"**Usage**: /untimeout <member>" +
							"\n**Permissions Required:** MANAGE SERVER" +
							"\n\n **Arguments:**" +
							"\n *<member>*: The member to have their timeout removed. (Required)"
					}],
				])],

				components: [new ActionRowBuilder().addComponents(
					createButton("Back", "Help0General", interaction.user.id, ButtonStyle.Primary),
					createButton("Forward", "Help1.1ModCont", interaction.user.id, ButtonStyle.Primary))]
			})
		} catch (e) {}
	}
}
