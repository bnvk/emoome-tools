// violence_2.js
module.exports = {
	title: 'Violence Words',
	full: 'violence',
	language: 'english',
	type: 'P',
	topic: 'V',
	url: 'http://en.wikipedia.org/wiki/List_of_martial_arts',
	element: '#mw-content-text ul li a',
	filter: [
	 'Ethiopia',
     'Dambe',
     'Nigeria',
	 'South Africa',
     'Somalia',
     'Sudan',
     'Senegal',
     'Togo',
     'South Africa',
	 '1 Africa',
     '2 The Americas',
     '3 Asia',
     '4 Europe',
     '4.1 European folk styles',
     '4.2 Modern sports',
     '5 Near East & Central Asia',
     '5.1 Traditional',
     '5.2 Modern',
     '6 Oceania',
     '6.1 Traditional',
     '6.2 Modern',
     '7 See also',	
     'Fiction',
     'History',
     'Timeline',
     'Hard and Soft',
     'v',
     't',
     'e',
     'Forms (kata)',
     'Marquess of Queensberry rules',
     'German school of fencing',
     'French school of fencing',
     'Italian school of swordsmanship',     
	 'Historical fencing in Scotland',
	 'Arnis/Eskrima/Kali',
	 'Pale',
	 'Brazilian Jiu-Jitsu/Gracie Jiu-Jitsu',
     'List of fictional martial arts',
     'Outline of martial arts',
     'List of martial arts weapons',
     'China',
     'Japan',
     'Korea',
     'India',
     'Philippines',
     'Indonesia/Malaysia',
     'Europe'	 
	],
	clean: function(text) {

		text = text.replace(' (Manegra)', '');
		text = text.replace('\'', '');
		text = text.replace('\'', '');
		text = text.replace(' (fighting style)', '');
		text = text.replace(' (military)', '');

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