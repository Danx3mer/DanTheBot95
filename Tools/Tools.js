const UtilityTools = require("./Utility/UtilityTools.js")
const EconomyTools = require("./Economy/EconomyTools.js")

class Tools {
	//has to be in this order of initialization
	constructor() {
		this.utility = new UtilityTools();
		this.economy = new EconomyTools();
	}
}

module.exports = new Tools();