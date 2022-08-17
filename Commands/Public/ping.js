const {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  /**
   *
   * @param {CommandInteraction} interaction
   */
  execute(interaction) {
    interaction.channel.send("Pinging...").then((pingBoi) => {
      pingBoi.delete();
      var embed = new EmbedBuilder()
        .setDescription(
          `Bot ping is: ${
            pingBoi.createdTimestamp - interaction.createdTimestamp
          }ms.`
        )
        .setTitle("Ping:");
      return interaction.reply({ embeds: [embed] });
    });
  },
};
