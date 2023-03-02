class EconLists {
	currencySymbol = "⌬";

	jobs = {
		"Beggar": 10,
		"Garbage Man": 50,
		"Clown": 80,
		"Full Stack Developer": 130,
		"Field Medic": 180,
		"Investor": 215,
		"Grim Reaper": 250,
		"Hitman": 450
	};

	crimes = {
		crimeNames: [
			"robbing",
			"being happy"
		],

		failedCrimes: [
			"you are so stupid you didn't see that they had a katanna out and they sliced you",
			"you were so happy that you exploded. That's why it is illegal, to protect you"
		],

		successfulCrimes: [
			"you pickpocketed some doofus living on 43rd street and he didn't notice.",
			"apparently being extremelly happy is against the law, but you didn't get caught because you were all alone. Just alone. All. Alone..."
		],
	};

	getRandomCrime(success) {
		const pickedNumber = Math.round(Math.random() * (this.crimes["crimeNames"].length - 1))
		let crimeRes = success == true ? "successfulCrimes" : "failedCrimes";

		return { [this.crimes["crimeNames"][pickedNumber]]: this.crimes[crimeRes][pickedNumber] }
	}
};

module.exports = new EconLists();
