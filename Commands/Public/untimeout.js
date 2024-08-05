const {
  SlashCommandBuilder,
  CommandInteraction,
	PermissionFlagsBits
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("untimeout")
    .setDescription("removes timeout from an already timed out member.")
	  .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
	.addUserOption(option => 
		option.setName('member')
		.setDescription("The member to have their timeout removed.")
		.setRequired(true)),
	/**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
	  const user = interaction.options.getUser('member');
	  const member = await interaction.guild.members
		  .fetch(user.id)
		  .catch(console.error)
	  
	  try {
		  await member.timeout(null);
		  
		  	interaction.reply({
			  embeds: [createEmbed(`${user.tag} has was taken out of timeout!`, "UNTIMEOUT!!!","","don\'t be like them in the first place!")]
		  })
	  } catch(e) {
		  interaction.reply({
			  embeds: [createEmbed(`${user.tag} couldn't be taken out of timeout!`, "Untimeout Error!!!","",":/")]
		  })
	  }
  },
};
