const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const { loadEvents } = require("./Handlers/eventHandler.js");
const { loadCommands } = require("./Handlers/commandHandler.js");
const { loadComponents } = require("./Handlers/componentHandler.js");

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

client.commands = new Collection();
client.buttons = new Collection();
client.config = require("./config.json")

client
  .login(process.env['BOT_TOKEN'])
  .then(() => {
    loadEvents(client);
    loadCommands(client);
    loadComponents(client);
  })
  .catch((err) => console.log(err));

const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
