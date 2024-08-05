const { SlashCommandBuilder } = require("@discordjs/builders");

function loadCommands(client) {
  let totalNumCommands = 0
  const ascii = require("ascii-table");
  const fs = require("fs");
  const table = new ascii().setHeading("Commands", "Status");

  let commandsArray = [];
  let developerArray = [];

  const commandsFolder = fs.readdirSync("./Commands");
  for (const folder of commandsFolder) {
    const commandFiles = fs
      .readdirSync(`./Commands/${folder}`)
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const commandFile = require(`../Commands/${folder}/${file}`);
      if (commandFile.inDev) {
        if (folder == "Generic_Test_Other") table.addRow(file, "🔵 Generic (Never gonna be released)");
        else table.addRow(file, "🔴 Indev (Not released at all)");
        continue
      }
      else ++totalNumCommands
      client.commands.set(commandFile.data.name, commandFile);

      if (commandFile.developer) {
        if (commandFile.data instanceof SlashCommandBuilder)
          developerArray.push(commandFile.data.toJSON());
        else commandsArray.push(commandFile.data);
        table.addRow(file, "🟡 In Testing Mode (Only available on dev servers)");
      }
      else {
        if (commandFile.data instanceof SlashCommandBuilder)
          commandsArray.push(commandFile.data.toJSON());
        else commandsArray.push(commandFile.data);
        table.addRow(file, "🟢 Public!");
      }

      continue;
    }
  }
  client.application.commands.set(commandsArray);

  const developerGuild = client.guilds.cache.get(client.config.developerGuild);
  if (developerArray.length > 0) {
    try {
      developerGuild.commands.set(developerArray);
    } catch (error) { console.error("App is not in dev guild!\n") }
  }

  return console.log(table.toString(), `\nLoaded ${totalNumCommands} Commands.\n`);
}

module.exports = { loadCommands };
