// transportation_5.js
module.exports = {
	title: 'Transportation Words',
	full: 'transportation',
	language: 'english',
	type: 'D',
	topic: 'TR',
	url: 'http://www.ldoceonline.com/Trains%252C%2520Railways-topic/',
	element: 'div.cloud a.clouditem',
	filter: [],
	clean: function(text) {

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};