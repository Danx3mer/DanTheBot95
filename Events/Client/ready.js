const { Client, ActivityType } = require ("discord.js");

let activities = [`Danx3mer.github.io`]
  ,i = 0;

module.exports = {
 name: "ready",
 once: true,
/**
 *
 * @param {Client} client
 */
 execute(client) {
   console.log(`client is now logged in as ${client.user.username}`)
     
   setInterval(() => client.user.setPresence({
     activities: [{ name: `${activities[i++ % activities.length]}`, type: ActivityType.Watching }], status: 'dnd'}), 5000);
 }
};
