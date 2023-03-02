class EconomyTools {
	constructor() {
		this.job = {
			get: require("./getJob.js"),
			set: require("./setJob.js")
		};
		this.balance = {
			get: require("./getBal.js"),
			set: require("./setBal.js")
		};
		this.lists = require("./econLists.js");
		this.register = require("./register.js");
		this.checkRegister = require("./checkForRegister");
	}
}

module.exports = EconomyTools;