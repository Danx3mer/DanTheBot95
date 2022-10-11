const {
  ActionRowBuilder,
  ButtonStyle
} = require("discord.js");
const createButton = require("../../../Tools/Button.js")
module.exports = {
  data: {
    name: 'NukeNo'
  },
    async execute(interaction, client) {
		await interaction.deferUpdate()
		await interaction.editReply({
        content: `Phew!`,
		components: [new ActionRowBuilder().addComponents(createButton("100% YES", "NukeYes_DISABLED",ButtonStyle.Danger).setDisabled(),createButton("NO!!!", "NukeNo_DISABLED",ButtonStyle.Success).setDisabled())]
      })
    }
}