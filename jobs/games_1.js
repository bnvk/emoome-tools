// games_1.js
module.exports = {
	title: 'Games Words',
	full: 'games',
	language: 'english',
	type: 'A',
	topic: 'GA',
	url: 'http://en.wikipedia.org/wiki/List_of_board_games',
	element: '#mw-content-text div ul li a',
	filter: [],
	clean: function(text) {

		text = text.replace('', '');
	
		if (text.length > 1) {	
			var output = {
				type: "string",
				data: text
			};
		}
		else {
			var output = '';
		}

		return output;
	}
};