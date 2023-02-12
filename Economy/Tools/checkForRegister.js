const jsonRead = require("../../Tools/ReadJson.js")

module.exports = (userID) => {
	const db = jsonRead("./Economy/Databases/balance.json")
	if(!db.hasOwnProperty(userID)) return false
	return true
}
