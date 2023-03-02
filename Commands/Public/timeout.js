const {
  SlashCommandBuilder,
  CommandInteraction,
	PermissionFlagsBits
} = require("discord.js");

const tools = require("../../Tools/Tools.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("timeout a member.")
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
		
	.addUserOption(option => 
		option.setName('member')
		.setDescription("The member to be timed out.")
		.setRequired(true))
	  
    .addIntegerOption(option =>
		option.setName('time')
		.setDescription('The amount of minutes to timeout the specified member.')
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
			let isThereAnS = ''
		  if(time == 60 * 1000) isThereAnS='s'
		  	interaction.reply({
			  embeds: [tools.utility.createEmbed(`${user.tag} has been timed out for ${time} Minute${isThereAnS}! Reason: ${reason}`, "TIMEOUT!!!","","don\'t end up like them!")]
		  })
	  } catch(e) {
		  interaction.reply({
			  embeds: [tools.utility.createEmbed(`${user.tag} couldn't be timed out!`, "Timeout Error!!!","",":/")]
		  })
	  }
  },
};
