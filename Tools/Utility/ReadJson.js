module.exports = (filePath, nameOfVar = null) => {
	try { 
		let res = readFromJson(filePath, nameOfVar);
		return res;
	}
	catch(e) {
		console.log(`goofy json read error: ${e}`);
		let json = require(filePath);
		console.log(JSON.stringify(json));
		let parseJson = JSON.parse(json);
		if (nameOfVar == null) return parseJson;
		return parseJson[nameOfVar];
	}
}

function readFromJson(filePath, nameOfVar) {
	const fs = require('fs');
	let content = fs.readFileSync(filePath);

	let parsedJson = JSON.parse(content);
	
	if (nameOfVar == null) return parsedJson;
	return parsedJson[nameOfVar];
}
