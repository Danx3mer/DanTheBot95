const { ButtonBuilder, ButtonStyle } = require("discord.js")

module.exports = (name, id, style = ButtonStyle.Primary, url = null, emoji = null) => {
  const button = new ButtonBuilder()
  .setLabel(name)
  .setCustomId(id)
  .setStyle(style)
  if(style == ButtonStyle.Link) button.setURL(url)
  if(emoji!=null) button.setEmoji()
  
  return button;
}
