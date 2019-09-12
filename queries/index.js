const data = require('../heroes_v2.json')

module.exports = {
		getHeroe: function(heroeId) {
		return data.find(item => item.id === heroeId).name
	},
		getHeroes: function() {
		return data
	},
		getTopTenForce: function() {
		return topTenForce()
	},
		getTopIntelligence: function() {
		return topTenIntelligence()
	},
		getTopStrength: function() {
		return topStrength()
	},
		getFastest: function() {
		return fastestInhuman()
	},
		getWomenNonHuman: function() {
		return womenNonHuman()
	},
		getSpeedIntFilter: function() {
		return speedLackIntelligence()
	}
}

// Function to get top ten sorted by force
const topTenForce = () => {
	let topForce = data.sort((a, b) => 
	b.powerstats.power - a.powerstats.power).slice(0,10)
	return topForce
}

// Function to get 10 most intelligent humans
const topTenIntelligence = () => {
	let humansList = data.filter((item) => {
		return item.appearance.race === "Human"
	})
	let mostIntelligent = humansList.sort((a, b) =>
	b.powerstats.intelligence - a.powerstats.intelligence).slice(0, 10)
	return mostIntelligent
}

// Function to get 10 with highest strength
const topStrength = () => {
	let topStrength = data.sort((a, b) => 
	b.powerstats.strength - a.powerstats.strength).slice(0, 10)
	return topStrength
}

// Function to get 10 fastest non-human
const fastestInhuman = () => {
	let nonHumans = data.filter((item) => {
		return item.appearance.race != "Human"
	})
	let topSpeed = nonHumans.sort((a, b) => 
	b.powerstats.speed - a.powerstats.speed).slice(0, 10)
	return topSpeed
}

// Function to return women having strength above 80 and race != human
const womenNonHuman = () => {
	let women = data.filter((item) => {
		return item.appearance.gender === "Female"
	})
	let womenNotHuman = women.filter((item) => {
		return item.appearance.race != "Human"
	})
	let strongWomen = womenNotHuman.filter((item) => {
		return item.powerstats.strength > 60
	})

	return strongWomen
}

// Function to return strength greater than 60 but intelligence < 60
const speedLackIntelligence = () => {
	let speedFilter = data.filter((item) => {
		return item.powerstats.speed > 60
	})
	let intelFilter = speedFilter.filter((item) => {
		return item.powerstats.intelligence < 60
	})

	return intelFilter
}