// patterns_sayings.js
module.exports = {
	title: 'Sayings',
	full: 'patterns',
	language: 'english',
	type: 'sayings',
	topic: 'patterns',
	url: '',
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