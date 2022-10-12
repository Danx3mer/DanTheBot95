const {
  SlashCommandBuilder,
  CommandInteraction
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kicks a member.")
	.addUserOption(option => 
		option.setName('member')
		.setDescription("The member to be kicked.")
		.setRequired(true))
	  
	.addStringOption(option =>
		option.setName('reason')
		.setDescription('The reason that you want to kick the member.')),
	/**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
	  const user = interaction.options.getUser('member');
	  const reason = interaction.options.getString('reason') || "No reason";
	  const member = await interaction.guild.members
		  .fetch(user.id)
		  .catch(console.error)
	  try {
		  await member.kick(reason);
		  interaction.reply({
			  embeds: [createEmbed(`${user.tag} has been kicked! Reason: ${reason}`, "KICK!!!","","don\'t end up like them!")]
		  })
	  } catch(e) {
		  interaction.reply({
			  embeds: [createEmbed(`${user.tag} couldn't be kicked!`, "Kick Error!!!","",":/")]
		  })
	  }
  },
};
