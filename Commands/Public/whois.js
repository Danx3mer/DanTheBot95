const {
	SlashCommandBuilder,
	CommandInteraction,
	Colors
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("whois")
		.setDescription("Get a description of a user")
		.addUserOption(option =>
			option.setName('user')
				.setDescription("The user to get the details for.")
				.setRequired(false)),
	/**
	 *
	 * @param {CommandInteraction} interaction
	 */
	async execute(interaction) {
		try {
			const user = interaction.options.getUser('user') || interaction.user
			const member = await interaction.guild.members.fetch(user.id)
			const roles = member.roles.cache.map(role => role.toString()).join(", ")
			const nickname = member.nickname || `None (${user.displayName})`
			const permissions = member.permissions.toArray().join(", ") || "None"
			
			const allInvites = await interaction.guild.invites.fetch();
			const userInv = allInvites.filter(u => u.inviter && u.inviter.id === user.id);

			let totalUses = 0;
			userInv.forEach(inv => totalUses += inv.uses);

			const codesList = userInv.map(inv => inv.code).join(", ") || "N/A"

			const invitesString = "Total Invites: " + totalUses + "\nCodes: " + codesList

			let specials = ""
			if (member.communicationDisabledUntilTimestamp) specials += `Will Be Untimed Out <t:${Math.floor(member.communicationDisabledUntilTimestamp / 1000)}:R>\n`
			else specials += `Timed Out: No\n`

			if (user.bot) specials += `Bot: Yes\n`
			else specials += `Bot: No\n`

			if (member.premiumSince) specials += `Boosting Since <t:${Math.floor(member.premiumSinceTimestamp / 1000)}:R>\n`
			else specials += `Boosting: No\n`

			return interaction.reply({
				embeds: [
					createEmbed(`User Details for ${user.username}`, "User Details", "", "", Colors.Blue, [
						[{
							name: "User",
							value: user.toString(),
							inline: true
						}],
						[{
							name: "Username/Tag",
							value: user.tag.toString(),
							inline: true
						}],
						[{
							name: "Display Name",
							value: user.displayName.toString(),
							inline: true
						}],
						[{
							name: "Server Nickname",
							value: nickname,
							inline: true
						}],
						[{
							name: "User ID",
							value: user.id.toString(),
							inline: true
						}],
						[{
							name: "Server Join Date",
							value: `<t:${parseInt(member.joinedAt / 1000)}:R>`,
							inline: true
						}],
						[{
							name: "Discord Join Date",
							value: `<t:${parseInt(user.createdAt / 1000)}:R>`,
							inline: true
						}],
						[{
							name: "Server Roles",
							value: roles.toString(),
							inline: false
						}],
						[{
							name: "Server Permissions",
							value: permissions.toString(),
							inline: true
						}],
						[{
							name: "People Invited",
							value: invitesString,
							inline: false
						}],
						[{
							name: "Specials",
							value: specials.toString(),
							inline: true
						}],
					]).setThumbnail(user.displayAvatarURL({ size: 2048, dynamic: false }))
				]
			})
		} catch (e) {
			console.log(e)
			return interaction.reply({
				embeds: [
					createEmbed("This User Doesn't Exist Within The Context Of This Server.\nPlease Provide A User That Is In The Server Where The Command Is Being Run.", "Error! User Not Found", e, "", Colors.Red)
				]
			})
		}
	},
};
