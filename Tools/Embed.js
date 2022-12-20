const { EmbedBuilder, Colors } = require("discord.js")

module.exports = (Description, Title = "", Author= "", Footer= "", Color = Colors.Default,  Fields = null, Image = "") => {
    var embed = new EmbedBuilder()
      .setDescription(Description)
      .setTitle(Title)
  if(Author.length > 0) embed.setAuthor({name: Author})
  if(Footer.length > 0) embed.setFooter({text: Footer})  
  
  try{
        embed.setColor(Color)
      } catch(e){ console.log(`INVALID COLOR! ERROR: ${e}` )}
  
  try{
    embed.setImage(Image)
  } catch(e) { if(Image != "") console.log( `INVALID IMAGE! ERROR: ${e}` ) }
  
  if(Fields != null) 
		for(let i = 0; i < Fields.length; i++){
			embed.addFields(Fields[i]) 
		}
  return embed;
}
