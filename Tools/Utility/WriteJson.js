module.exports = (filePath, nameOfVar, newValue) => {
	const fs = require('fs')
	
	const contentOfJson = fs.readFileSync(filePath)

	let json = JSON.parse(contentOfJson);
	json[nameOfVar] = newValue

	fs.writeFile(filePath, JSON.stringify(json, null, 2), (err) => {
		if (err) console.log('Error writing json file:', err)
	})
}
