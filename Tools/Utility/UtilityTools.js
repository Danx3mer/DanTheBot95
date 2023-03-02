class UtilityTools {
	constructor() {
		this.json = {
			read: require("./ReadJson.js"),
			write: require("./WriteJson.js"),
			addValue: require("./AddValJson.js"),
			overWrite: require("./OverwriteJson.js")
		};
		this.createButton = require("./Button.js");
		this.createEmbed = require("./Embed.js");
	}
}

module.exports = UtilityTools;