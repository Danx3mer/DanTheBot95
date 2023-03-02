const Utility = require("../Utility/UtilityTools.js");
const util = new Utility;

module.exports = (userID) => {
	let economyDB = util.json.read("./Databases/balance.json")
	console.log(economyDB)
	console.log(economyDB[userID])
	console.log(economyDB[userID].balance)

	return economyDB[userID].balance;
}
