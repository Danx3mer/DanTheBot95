module.exports = (newJson, filePath) => {
	const fs = require('fs')

	fs.writeFile(filePath, JSON.stringify(newJson, null, 2), (err) => {
		if (err) console.log('Error overwriting json file:', err)
	})
}
