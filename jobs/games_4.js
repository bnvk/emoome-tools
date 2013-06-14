// games_4.js
module.exports = {
	title: 'Games Words',
	full: 'games',
	language: 'english',
	type: 'A',
	topic: 'GA',
	url: 'http://boardgames.about.com/od/gamesaz/Board_and_Card_Games_A_to_Z.htm',
	element: '#sub a',
	filter: [
		'Concentration / Memory',
		'Spit / Speed / Slam'
	],
	clean: function(text) {

		text = text.replace(' (0)', '');
		text = text.replace(' (1)', '');
		text = text.replace(' (2)', '');
		text = text.replace(' (3)', '');
		text = text.replace(' (4)', '');
		text = text.replace(' (5)', '');
		text = text.replace(' (6)', '');
		text = text.replace(' (7)', '');
		text = text.replace(' (8)', '');
		text = text.replace(' (10)', '');
		text = text.replace(' (11)', '');
		text = text.replace(' (12)', '');
		text = text.replace(' (14)', '');
		text = text.replace(' (25)', '');
		text = text.replace(' (26)', '');
		text = text.replace(' (38)', '');
		text = text.replace(' (59)', '');
		text = text.replace('\'', '');	
	
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