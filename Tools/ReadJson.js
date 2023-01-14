module.exports = (filePath, nameOfVar = null) => {
	var json = require(filePath)

	if(nameOfVar == null) return json
	return json[nameOfVar]
}
