module.exports = {
  data: {
    name: 'hello'
  },
    async execute(interaction, client) {
      interaction.reply({
        content: `hi`
      })
    }
  
}