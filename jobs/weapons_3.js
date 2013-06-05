// weapons_3.js
module.exports = {
	title: 'Weapons Words',
	full: 'weapons',
	language: 'english',
	type: 'D',
	topic: 'W',
	url: 'http://en.wikipedia.org/wiki/List_of_bullpup_firearms',
	element: '#mw-content-text table tr td:first-child a',
	filter: [
	 '1 Rifles',
     '2 Assault rifles',
     '3 Sniper rifles',
     '4 Machine guns',
     '5 Shotguns',
     '6 Submachine Guns/Personal Defense Weapons',
     '7 Other',
	 '[1]'
	],
	clean: function(text) {

		text = text.replace('[1]', '');

		if (text.length > 1) {
			var output = {
				type: "string",
				data: text
			};
		}
		else {
			output = '';
		}

		return output;
	}
};