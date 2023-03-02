const { CommandInteraction, InteractionType } = require("discord.js");

module.exports = {
	name: "interactionCreate",
	/**
	 *
	 * @param {CommandInteraction} interaction
	 */
	async execute(interaction, client) {
		if (interaction.isChatInputCommand()) {

			const command = client.commands.get(interaction.commandName);

			if (!command)
				return interaction.reply({
					content: "This command is outdated/ no longer supported.",
				});

			try {
				await command.execute(interaction, client);
			} catch (e) { console.error("COMMAND ERROR", e) }
		}
		else if (interaction.isButton()) {
			const { buttons } = client
			const { customId } = interaction

			if (!customId.endsWith(interaction.user.id)) {
				return interaction.reply({
					content: "This button is not for you",
					ephemeral: true
				})
			}
			let newCustomId = customId.toString().replace(interaction.user.id.toString(), '');
			const button = buttons.get(newCustomId)
			if (!button) return console.log("ERROR: THERE IS NO CODE FOR THIS BUTTON");
			try {
				button.execute(interaction, client);
			} catch (e) { console.error(e) }
		}
		else if (interaction.type == InteractionType.ApplicationCommandAutocomplete) {
			const { commands } = client;
			const { commandName } = interaction;
			const command = commands.get(commandName);
			if (!command) return;

			try {
				await command.autocomplete(interaction, client);
			} catch (e) { console.error("AUTOCOMP ERROR", e) }
		}
	},
};
