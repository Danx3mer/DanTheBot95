const {
  SlashCommandBuilder,
  ChatInputCommandInteraction
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")

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
    switch (interaction.options.getSubcommand()) {
      case "brain":
        {
          interaction.reply({
            embeds: [createEmbed("You have " + (Math.floor(Math.random() * 101) + 1) + " brain cells !!!", "Brain Ratings:", "", "How're you so smart? I have -5 :/")],
          });
        }
        break;
        
      case "howpog":
        {
          interaction.reply({
            embeds: [createEmbed("You are " + (Math.floor(Math.random() * 100) + 1) + "% pog !!!" ,"Pog Ratings:")],
          });
        }
        break;
        
      case "epicgamer":
        {
            interaction.reply({
              embeds: [createEmbed("You are " + (Math.floor(Math.random() * 100) + 1) + "% Epic gamer :sunglasses:", "Epic Gamer Ratings:")],
            });
        }
        break;
    }
  },
};
