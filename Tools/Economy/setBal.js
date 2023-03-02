const Utility = require("../Utility/UtilityTools.js");
const util = new Utility;

const getBal = require("./getBal.js");

module.exports = (userID, amt, overwrite) => {
	let json = util.json.read("./Databases/balance.json")
	
	if (overwrite) 
		json[userID].balance = amt
	else
		json[userID].balance = getBal(userID) + amt
	util.json.overWrite(json, "./Databases/balance.json");
}
