const Utility = require("../Utility/UtilityTools.js");
const util = new Utility;

module.exports = (userID) => {
	let db = util.json.read("./Databases/balance.json")
	if (db.hasOwnProperty(userID)) return;
	let data = {
		"balance": 0,
		"work": null
	};
	util.json.addValue(db, userID, data);
}
