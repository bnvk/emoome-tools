// body_4.js
module.exports = {
	title: 'Body Words',
	full: 'body',
	language: 'english',
	type: 'P',
	topic: 'B',
	url: 'https://en.wikipedia.org/wiki/Human_anatomy',
	element: '#mw-content-text ul li a',
	filter: [
		'1 Study',
		'2 Anatomy in visual arts',
		'3 Approaches',
		'3.1 Regional groups',
		'3.2 Internal organs (by region)',
		'3.3 Major organ systems',
		'3.4 Superficial anatomy',
		'4 See also',
		'5 References',
		'6 External links',	
		'v',
		't',
		'e',
		'Open Directory Project',
		'"Anatomy of the Human Body". 20th edition. 1918. Henry Gray.',
		'Human anatomy in photo',
		'Human Anatomy Lectures on Video and Other Learning Resouces',
		'Terminologia Anatomica (names of anatomical features) on FIPAT site',
		'Human Body Maps (interactive human body) on HL.com',
		'List of human anatomical features',
		'List of human anatomical parts named after people',
		'List of bones of the human skeleton',
		'List of distinct cell types in the adult human body',
		'List of muscles of the human body',
		'List of regions in the human brain',
		'Terminologia Anatomica',
		'Terms for anatomical location',
		'Visible Human Project',
		'Integrative Biology 131: General Human Anatomy (Fall 2005) by Professor Marian Diamond'    			
	],
	clean: function(text) {

		text = text.replace('Chest  – ', '');
		text = text.replace('\'', '');
		text = text.replace(' (biology)', '');
	
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