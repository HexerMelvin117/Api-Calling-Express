const data = require('../heroes_v2.json')

module.exports = {
		getHeroe: function(heroeId) {
		return data.find(item => item.id === heroeId).name
	},
		getHeroes: function() {
		return data
	}
}