const {
  SlashCommandBuilder,
  CommandInteraction
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("timeout a member.")
	.addUserOption(option => 
		option.setName('member')
		.setDescription("The member to be timed out.")
		.setRequired(true))
	  
    .addIntegerOption(option =>
		option.setName('time')
		.setDescription('the amount of minutes to timeout the specified member.')
		.setRequired(true))	  
	  
	.addStringOption(option =>
		option.setName('reason')
		.setDescription('The reason that you want to timeout the member.')),
	/**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
	  const user = interaction.options.getUser('member');
	  const time = interaction.options.getInteger('time');
	  const reason = interaction.options.getString('reason') || "No reason";
	  const member = await interaction.guild.members
		  .fetch(user.id)
		  .catch(console.error)
	  
	  try {
		  await member.timeout(time * 60 * 1000, reason);
		  
		  	interaction.reply({
			  embeds: [createEmbed(`${user.tag} has been timed out! Reason: ${reason}`, "TIMEOUT!!!","","don\'t end up like them!")]
		  })
	  } catch(e) {
		  interaction.reply({
			  embeds: [createEmbed(`${user.tag} couldn't be timed out!`, "Timeout Error!!!","",":/")]
		  })
	  }
  },
};
