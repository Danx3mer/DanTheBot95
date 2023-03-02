const { ButtonBuilder, ButtonStyle } = require("discord.js")

module.exports = (name, id, userId, style = ButtonStyle.Primary, url = null, emoji = null) => {
  const button = new ButtonBuilder()
  .setLabel(name)
  .setCustomId(id + userId)
  .setStyle(style)
  if(style == ButtonStyle.Link) button.setURL(url)
  if(emoji!=null) button.setEmoji()
  
  return button;
}
