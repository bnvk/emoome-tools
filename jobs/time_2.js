// time_2.js
module.exports = {
	title: 'Time Words',
	full: 'time',
	language: 'english',
	type: 'I',
	topic: 'TI',
	url: 'http://thesaurus.com/browse/time',
	element: '#rpane div table td span a',
	filter: [
     'go',	
     'diary',
     'list',
     'log',
     'scope',
     'point',
     'advantage',
     'tide',
     'tour',
     'turn',
     'accident',
     'luck',
     'misfortune',
     'agenda',
     'bulletin',
     'program',
     'record',
     'register',
     'table',
     'break',          
	 'card',                              
     'shot',
     'show',
	 'show ipa', 
	 'show spelled', 
	 'good luck'
	],
	clean: function(text) {

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