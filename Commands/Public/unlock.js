const {
	SlashCommandBuilder,
	CommandInteraction,
	Colors,
	PermissionFlagsBits
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("unlock")
		.setDescription("Unlocks the specified channel so that everyone can type.")
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
		.addChannelOption(option =>
			option.setName('channel')
				.setDescription('The channel that you want to unlock.')),
	
	/**
   *
   * @param {CommandInteraction} interaction
   */
	execute(interaction) {
		const channel = interaction.options.getChannel('channel') || interaction.channel;

		if (channel.permissionsFor(interaction.guild.id).has(PermissionFlagsBits.SendMessages))
			return interaction.reply({
				embeds:
					[createEmbed("The channel isn\'t locked!", "Not Locked!", "", "", Colors.Yellow)]
				, ephemeral: true
			});

		channel.permissionOverwrites.edit(interaction.guild.id, {
			SendMessages: true,
		});
		return interaction.reply({
			embeds:
				[createEmbed(`${channel} has been unlocked!`, "Unlocked!", "", "", Colors.Green)]
		})
	},
};
