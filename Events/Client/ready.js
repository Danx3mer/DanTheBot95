const { Client, ActivityType } = require ("discord.js");

let activities = [`L+Bozo+Ratio`, `Fortnut`, `With d Bois`, `this idiotic loser life`, `with the unvierse`, `halo infinite`]
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
     activities: [{ name: `${activities[i++ % activities.length]}`, type: ActivityType.Playing }], status: 'dnd'}), 5000);
 }
};
