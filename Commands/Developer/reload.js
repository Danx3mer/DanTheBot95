const {
  PermissionFlagsBits,
  EmbedBuilder,
  SlashCommandBuilder,
  ChatInputCommandInteraction,
} = require("discord.js");

const { loadCommands } = require("../../Handlers/commandHandler.js");
const { loadEvents } = require("../../Handlers/eventHandler.js");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reload your event or command handler.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)

    .addSubcommand((options) =>
      options.setName("events").setDescription("Reload your event handler.")
    )

    .addSubcommand((options) =>
      options.setName("commands").setDescription("Reload your command handler.")
    ),

  /**
  *
  * @param {ChatInputCommandInteraction} interaction
  * @param {Client} client
  */
  execute(interaction, client) {
    switch (interaction.options.getSubcommand()) {
      case "events":
        {
          loadEvents(client);
          return interaction.reply({
            embeds: [
              new EmbedBuilder()
              .setTitle("RELOADED!")
              .setDescription("The event handler has been reloaded!")]});
        }
      case "commands":
        {
          loadCommands(client);
          return interaction.reply({
            embeds: [
              new EmbedBuilder()
              .setTitle("RELOADED!")
              .setDescription("The command handler has been reloaded!")]});
        }
    }
  },
};
