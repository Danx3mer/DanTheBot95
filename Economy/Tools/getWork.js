const jsonRead = require("../../Tools/ReadJson.js")

module.exports = (userID) => {
	return jsonRead("./Economy/Databases/balance.json")[userID].work
}
