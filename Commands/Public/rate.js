const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rate")
    .setDescription("Rate something.")

    .addSubcommand((options) =>
      options
        .setName("brain")
        .setDescription("Find out how many brain cells you have!")
    )

    .addSubcommand((options) =>
      options.setName("howpog").setDescription("Find out how pog you are!")
    )

    .addSubcommand((options) =>
      options
        .setName("epicgamer")
        .setDescription("Find out how epic gamer you are!")
    ),

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction) {
    const embed = new EmbedBuilder();
    switch (interaction.options.getSubcommand()) {
      case "brain":
        {
          embed
            .setTitle("Brain Ratings:")
            .setDescription(
              "You have " +
                (Math.floor(Math.random() * 101) + 1) +
                " brain cells !!!"
            );
          interaction.reply({
            embeds: [embed],
          });
        }
        break;
      case "howpog":
        {
          embed
            .setTitle("Pog Ratings:")
            .setDescription(
              "You are " + (Math.floor(Math.random() * 100) + 1) + "% pog !!!"
            );
          interaction.reply({
            embeds: [embed],
          });
        }
        break;
      case "epicgamer":
        {
          embed
            .setTitle("Epic Gamer Ratings:")
            .setDescription(
              "You are " +
                (Math.floor(Math.random() * 100) + 1) +
                "% Epic gamer :sunglasses:"
            ),
            interaction.reply({
              embeds: [embed],
            });
        }
        break;
    }
  },
};
