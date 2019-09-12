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
	}
}

// Function to get top ten sorted by force
const topTenForce = () => {
	let topForce = data.sort((a, b) => 
	a.powerstats.power > b.powerstats.power).slice(0,10)
	return topForce
	//hi
}