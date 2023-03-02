const Utility = require("../Utility/UtilityTools.js");
const util = new Utility;

module.exports = (userID, job) => {
	let json = util.json.read("./Databases/balance.json")
	
	json[userID].work = job;
	util.json.overWrite(json, "./Databases/balance.json");
}
