const jsonOverwrite = require("../../Tools/OverwriteJson.js")
const jsonRead = require("../../Tools/ReadJson.js")
const getBalance = require("./getBal.js");

module.exports = (userID, amt, overwrite) => {
	let dbFilePath = "./Economy/Databases/balance.json"
	let json = jsonRead(dbFilePath)
	if (overwrite) 
		json[userID].balance = amt
	else
		json[userID].balance = getBalance(userID) + amt
	jsonOverwrite(json, dbFilePath);
}
