const { Client, ActivityType, Colors } = require("discord.js");

let activities = [`Danx3mer.github.io`, `for V0.7_B (soon?)`]
	, i = 0;

const tools = require("../../Tools/Tools.js");

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
			activities: [{ name: `${activities[i++ % activities.length]}`, type: ActivityType.Watching }], status: 'dnd'
		}), 5000);

		tools.utility.json.write('./config.json', "timesStarted", ++client.config["timesStarted"])
		try {
			client.channels.cache.get(client.config.statusChannel)
				.send({
					embeds: [tools.utility.createEmbed(`I HAVE BEEN REINCARNATED ${client.config["timesStarted"]} TIMES`, "ITS ALIVE!!!", "", "Oh No.", Colors.Red)
					]
				})
		} catch (e) {
			console.log("ERROR: BOT IS NOT IN TESTING SERVER ")
		}
	}
};
