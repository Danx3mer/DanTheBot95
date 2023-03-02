const Utility = require("../Utility/UtilityTools.js");
const util = new Utility;

module.exports = (userID) => {
	let economyDB = util.json.read("./Databases/balance.json")
	return economyDB[userID].work
}
