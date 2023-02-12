const {
	SlashCommandBuilder,
	CommandInteraction,
	PermissionFlagsBits
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("clear")
		.setDescription("Clear a certain amount of messages in a channel.")
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)

		.addNumberOption(option =>
			option.setName('messages')
				.setDescription('The number of messages to be deleted')
				.setMinValue(1)
				.setMaxValue(100)
				.setRequired(true))

		.addStringOption(option =>
			option.setName('reason')
				.setDescription('The reason that you are deleting these messages'))

		.addUserOption(option =>
			option.setName('user')
				.setDescription('The user who\'s messages you would like to delete (Only deletes messages from this user)')),
	/**
	 *
	 * @param {CommandInteraction} interaction
	 */
	async execute(interaction) {
		const messages = interaction.options.getNumber('messages')
		const reason = interaction.options.getString('reason') || "No Reason"
		const user = interaction.options.getUser('user')

		const channelMessages = await interaction.channel.messages.fetch(true)

		if (user) {
			let i = 0;
			let messagesToDel = [];
			channelMessages.forEach((message) => {
				if (message.author.id == user.id && messages > i) {
					messagesToDel.push(message);
					i++;
				}
			})

			interaction.channel.bulkDelete(messagesToDel, true).then((messages) => {
				interaction.reply({
					embeds: [
						createEmbed(`CLEARED THE CHANNEL OF ${i} MESSAGES MADE BY ${user.tag}. Reason: ${reason}`,
							"CHANNEL CLEARED!", "", `Action taken by <@${interaction.user.tag}>`)
					]
				})
			})
		}
		else {
			if(messages > channelMessages.length) messages = channelMessages.length
			interaction.channel.bulkDelete(messages, true).then(() => {
				interaction.reply({
					embeds: [
						createEmbed(`CLEARED THE CHANNEL OF ${messages} MESSAGES. Reason: ${reason}`,
							"CHANNEL CLEARED!", "", `Action taken by ${interaction.user.tag}`)
					]
				})
			})
		}
	},
};
