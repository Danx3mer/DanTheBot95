const {
  SlashCommandBuilder,
  CommandInteraction,
	Colors,
	PermissionFlagsBits
} = require("discord.js");

const createEmbed = require("../../Tools/Embed.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Bans a member.")
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
		
	.addUserOption(option => 
		option.setName('member')
		.setDescription("The member to be banned.")
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
		  await member.ban({
			  deleteMessageDays: 0,
			  reason: reason });
		  interaction.reply({
			  embeds: [createEmbed(`${user.tag} has been banned! Reason: ${reason}`, "BAN!!!","","don\'t end up like them!")]
		  })
	  } catch(e) {
		  interaction.reply({
			  embeds: [createEmbed(`${user.tag} couldn't be banned!`, "Ban Error!!!","",":/",Colors.Red)]
		  })
	  }
  },
};
