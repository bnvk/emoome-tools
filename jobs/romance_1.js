// romance_1.js
module.exports = {
	title: 'Romance Words',
	full: 'romance',
	language: 'english',
	type: 'E',
	topic: 'R',
	url: 'http://www.romantic-whispers.com/romantic-words.html#.UZX7cStHD_I',
	element: '#ContentColumn div p b',
	filter: [
		'Life:',
		'life,',
		'Frendly:',
		'Wrong',
		'Wright',
		'Proud',
		'list of words!',
		'Outstanding!',
		'romantic words.',
		'romantic search.',
		'If loving you was  Wrong then I dont want to be Wright',
		'I usually enjoyed from these romantic words',
		'Or, ',
		'Click here for More Romantic Words',
		'Romantic Love Letters To Copy:',
		'Romantic Verses:',
		'Uidnvhse',
		'Ytamhre'
	],
	clean: function(text) {
	
		text = text.replace(':', '');
		text = text.replace('.', '');
		text = text.replace(',', '');
		text = text.replace('!', '');
		text = text.replace(', ', '');
	
		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};