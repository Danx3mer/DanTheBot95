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

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

client.commands = new Collection();
client.config = require("./config.json");

client
  .login(client.config.token)
  .then(() => {
    loadEvents(client);
    loadCommands(client);
  })
  .catch((err) => console.log(err));

var http = require('http'); 
http.createServer(function (_, res) { res.write("I'M DA DJS V14 BOT, AND IM ALIVE!!! probably..."); res.end(); }).listen(54000);
