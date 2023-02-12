module.exports = (filePath, valName, val) => {
	let fs = require('fs');

	let json = fs.readFileSync(filePath)

	let parseJson = JSON.parse(json);

	if (parseJson.hasOwnProperty(valName)) return

	parseJson[valName] = val
	
	fs.writeFileSync(filePath, JSON.stringify(parseJson, null, 2))
}
