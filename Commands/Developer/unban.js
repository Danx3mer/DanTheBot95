const {
  SlashCommandBuilder,
  CommandInteraction
} = require("discord.js");

module.exports = {
	inDev: true,
	developer: true,
  data: new SlashCommandBuilder()
    .setName("unban")
    .setDescription("Unbans a member.")
	.addUserOption(option => 
		option.setName('member')
		.setDescription("The member to be unbanned.")
		.setRequired(true))
	  
	.addStringOption(option =>
		option.setName('reason')
		.setDescription('The reason that you want to ban the member.')),
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
		  await member.unban({
			  deleteMessageDays: 0,
			  reason: reason});
		  
		  		  user.send({
			  content: `You have been unbanned from ${interaction.guild.name}. Reason: ${reason}`
		  }).catch(console.error)
		  
		  interaction.reply({
			  content: "USER UNBANNED SUCCESSFULLY!!!"
		  })
	  } catch(e) {
		  interaction.reply({
			  content: "ERROR! USER COULDN'T BE UNBANNED"
		  })
	  }
  },
};
