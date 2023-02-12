const jsonRead = require("../../Tools/ReadJson.js")
const jsonOverwrite = require("../../Tools/OverwriteJson.js")

module.exports = (userID, job) => {
	let json = jsonRead("./Economy/Databases/balance.json")
	json[userID].work = job
	jsonOverwrite(json, "./Economy/Databases/balance.json");
}
