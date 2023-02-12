const jsonAddVal = require("../../Tools/AddValJson.js")

module.exports = (userID) => {
	let data = {
		"balance": 0,
		"work": null
	}
	jsonAddVal("./Economy/Databases/balance.json", userID, data)
}
