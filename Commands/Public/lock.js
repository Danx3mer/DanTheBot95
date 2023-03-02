const {
	SlashCommandBuilder,
	CommandInteraction,
	Colors,
	PermissionFlagsBits
} = require("discord.js");

const tools = require("../../Tools/Tools.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("lock")
		.setDescription("Locks the specified channel so that only moderators can type.")
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
		.addChannelOption(option =>
			option.setName('channel')
				.setDescription('The channel that you want to lock down.'))
		.addStringOption(option =>
			option.setName('reason')
				.setDescription('The reason that you want to lock the channel down.')),
	/**
	 *
	 * @param {CommandInteraction} interaction
	 */
	execute(interaction) {
		const channel = interaction.options.getChannel('channel') || interaction.channel;
		const reason = interaction.options.getString('reason') || "No reason";

		if (!channel.permissionsFor(interaction.guild.id).has(PermissionFlagsBits.SendMessages))
			return interaction.reply({
				embeds:
					[tools.utility.createEmbed("The channel is already locked!", "Already Locked!", "", "", Colors.Yellow)]
				, ephemeral: true
			});

		channel.permissionOverwrites.edit(interaction.guild.id, {
			SendMessages: false,
		});
		return interaction.reply({
			embeds:
				[tools.utility.createEmbed(`${channel} has been locked! Reason: ${reason}`, "Locked!", "", "", Colors.Red)]
		})
	},
};
