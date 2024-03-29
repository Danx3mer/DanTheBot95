const {
	SlashCommandBuilder,
	CommandInteraction, 
	Colors
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")
const readFromJson = require("../../Tools/ReadJson.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("help")
		.setDescription("Tells you information about all of the commands in the bot"),
	/**
	 *
	 * @param {CommandInteraction} interaction
	 */
	execute(interaction) {
		const version = readFromJson("../config.json", "version")
		
		return interaction.reply({
			embeds: [createEmbed("**(All Commands)**", "Commands:", "", `Bot Version: ${version}`, Colors.Blue, [
				//Add a field for each command that will be added
				[{
					name: "</help:1063855780979281930>",
					value: "**Description**: The command you are using right now. Tells you information about all of the commands in the bot."+
						"\n **Usage**: /help"
				}],
				[{
					name: "</ping:1029596177479499899>",
					value: "**Description**: Gives you information about the status of the bot."+
						"\n **Usage**: /ping"
				}],
				[{
					name: "</ban:1029596177479499896>",
					value: "**Description**: Bans a member. \n"+
						"**Usage**: /ban <member> [reason] "+
						"\n**Permissions Required:** MANAGE SERVER"+
						"\n\n **Arguments:**" +
						"\n *<member>*: The member to be banned (Required)"+
						"\n *[reason]*: The reason that you want to ban the member (Optional)" + "\n"
				}],
				[{
					name: "</kick:1029596177479499897>",
					value: "**Description**: Kicks a member. \n"+
						"**Usage**: /kick <member> [reason] "+
						"\n**Permissions Required:** MANAGE SERVER"+
						"\n\n **Arguments:**" +
						"\n *<member>*: The member to be kicked (Required)"+
						"\n *[reason]*: The reason that you want to kick the member (Optional)" + "\n"
				}],
				[{
					name: "</timeout:1029596177479499901>",
					value: "**Description**: Timeouts a member.\n"+
						"**Usage**: /timeout <member> <time> [reason] "+
						"\n**Permissions Required:** MANAGE SERVER"+
						"\n\n **Arguments:**" +
						"\n *<member>*: The member to be timed out (Required)"+
						"\n *<time>*: The amount of minutes to timeout the specified member. (Required)"+
						"\n *[reason]*: The reason that you want to timeout the member. (Optional)" + "\n"
				}],
				[{
					name: "</untimeout:1029596177479499902>",
					value: "**Description**: Removes timeout from an already timed out member.\n"+
						"**Usage**: /untimeout <member>"+
						"\n**Permissions Required:** MANAGE SERVER"+
						"\n\n **Arguments:**" +
						"\n *<member>*: The member to be timed out (Required)"
				}],
				[{
					name: "</lock:1032471127831891988>",
					value: "**Description**: Locks the specified channel so that only moderators can type.\n"+
						"**Usage**: /lock [channel] [lock]"+
						"\n**Permissions Required:** MANAGE SERVER"+
						"\n\n **Arguments:**" +
						"\n *[channel]*: The channel that you want to lock down. If not specified the channel that this command was sent in will be locked down. (Optional)" +
						"\n *[lock]*: The reason that you want to lock the channel down. (Optional)"
				}],
				[{
					name: "</unlock:1032471127831891989>",
					value: "**Description**: Unlocks the specified channel so that everyone can type.\n"+
						"**Usage**: /unlock [channel]"+
						"\n**Permissions Required:** MANAGE SERVER"+
						"\n\n **Arguments:**" +
						"\n *[channel]*: The channel that you want to unlock. If not specified the channel that this command was sent in will be unlocked. (Optional)"
				}],
				[{
					name: "</nuke:1029596177479499898>",
					value: "**Description**: NUKE DA CHANNEL!!!"+
						"\n**Usage**: /nuke"+
						"\n**Permissions Required:** ADMINISTRATOR"
				}],
				
				//rate commands
				[{
					name: "</rate howpog:1029596177479499900> [Part of /rate commands]",
					value: "**Description**: Find out how pog you are!\n"+
						"**Usage**: /rate howpog"
				}],
				[{
					name: "</rate epicgamer:1029596177479499900> [Part of /rate commands]",
					value: "**Description**: Find out how epic gamer you are!\n"+
						"**Usage**: /rate epicgamer"
				}],
				[{
					name: "</rate brain:1029596177479499900> [Part of /rate commands]",
					value: "**Description**: Find out how many brain cells you have!\n"+
						"**Usage**: /rate brain"
				}],
			])]
	})
},};
