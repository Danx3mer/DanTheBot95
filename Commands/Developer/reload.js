const {
  PermissionFlagsBits,
  SlashCommandBuilder,
  ChatInputCommandInteraction
} = require("discord.js");

const { loadCommands } = require("../../Handlers/commandHandler.js");
const { loadEvents } = require("../../Handlers/eventHandler.js");
const { loadComponents } = require("../../Handlers/componentHandler.js");
const createEmbed = require("../../Tools/Embed.js")

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
    )
    
    .addSubcommand((options) =>
      options.setName("components").setDescription("Reload your component handler.")
    ),

  /**
  *
  * @param {ChatInputCommandInteraction} interaction
  * @param {Client} client
  */
  execute(interaction, client) {
	  if(interaction.member.id != client.config.owner) return interaction.reply("WHAT THE HELL ARE YOU TRYING TO DO??? YOU'RE NOT DAN!")
    switch (interaction.options.getSubcommand()) {
      case "events":
        {
          loadEvents(client);
          console.log('The event handler has been reloaded')
          return interaction.reply({
            embeds: [createEmbed("The event handler has been reloaded!", "RELOADED!")]});
        }
      case "commands":
        {
          loadCommands(client);
          console.log('The command handler has been reloaded')
          return interaction.reply({
            embeds: [createEmbed("The command handler has been reloaded!", "RELOADED!")]});
        }
      case "components":
        {
          loadComponents(client);
          console.log('The component handler has been reloaded')
          return interaction.reply({
            embeds: [createEmbed("The component handler has been reloaded!", "RELOADED!")]});
        }
    }
  }
};
