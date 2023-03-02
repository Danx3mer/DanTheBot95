const {
  SlashCommandBuilder,
  CommandInteraction,
	Colors,
	PermissionFlagsBits
} = require("discord.js");

const tools = require("../../Tools/Tools.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kicks a member.")
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
		
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
			if(!member.kickable) throw("not kickable");
		  await member.kick(reason);
		  return interaction.reply({
			  embeds: [tools.utility.createEmbed(`${user.tag} has been kicked! Reason: ${reason}`, "KICK!!!","","don\'t end up like them!")]
		  })
	  } catch(e) {
		  return interaction.reply({
			  embeds: [tools.utility.createEmbed(`${user.tag} couldn't be kicked!`, "Kick Error!!!","",":/", Colors.Yellow)]
		  })
	  }
  },
};
