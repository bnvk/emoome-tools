// art_1.js
module.exports = {
	title: 'Animal Words',
	full: 'animals',
	language: 'english',
	type: 'S',
	topic: 'A',
	url: 'http://www.enchantedlearning.com/wordlist/birds.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "".split('<br> ')
		};

		return output;
	}
};