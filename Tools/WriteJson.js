module.exports = (json, filePath, nameOfVar, newValue) => {
	json[nameOfVar] = newValue
	
	var fs = require('fs')
	
	fs.writeFile(filePath, JSON.stringify(json, null, 2), (err) => {
		if (err) console.log('Error writing json file:', err)
	})
}
