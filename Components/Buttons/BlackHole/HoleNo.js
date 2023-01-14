const {
  ActionRowBuilder,
  ButtonStyle
} = require("discord.js");
const createButton = require("../../../Tools/Button.js")
module.exports = {
  data: {
    name: 'HoleNo'
  },
    async execute(interaction, client) {
			try{
		await interaction.deferUpdate()
		await interaction.editReply({
        content: `Phew!`,
		components: [new ActionRowBuilder()
								 .addComponents(
									 createButton("100% YES",
																"NukeYes_DISABLED",
																interaction.user.id,
																ButtonStyle.Danger).setDisabled(),
									 createButton("NO!!!",
																"NukeNo_DISABLED",
																interaction.user.id,
																ButtonStyle.Success).setDisabled())]
      })
    }catch(e) {}
		}
}
