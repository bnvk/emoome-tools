// religion_4.js
module.exports = {
	title: 'Religion Words',
	full: 'religion',
	language: 'english',
	type: 'I',
	topic: 'RE',
	url: 'http://en.wikipedia.org/w/index.php?title=Category:Christian_terms&pagefrom=Seven+Deadly+Sins%0ASeven+deadly+sins#mw-pages',
	element: 'div.mw-content-ltr table td ul li a',
	filter: [
	 'Top',
     '0–9',
     'A',
     'B',
     'C',
     'D',
     'E',
     'F',
     'G',
     'H',
     'I',
     'J',
     'K',
     'L',
     'M',
     'N',
     'O',
     'P',
     'Q',
     'R',
     'S',
     'T',
     'U',
     'V',
     'W',
     'X',
     'Y',
     'Z',
     'Glossary of Christianity',
     'I am (biblical term)',
	 'Session (Presbyterianism)',
	 'Sell your cloak and buy a sword',
     'Primate (bishop)'	 
	],
	clean: function(text) {

		text = text.replace('', '');
		text = text.replace(' (Eastern Orthodox theology)', '');
		text = text.replace(' (ecclesiology)', '');
		text = text.replace(' (vestment)', '');
		text = text.replace(' (wisdom)', '');
		text = text.replace(' (Hexapla)', '');
		text = text.replace(' (Christian holiday)', '');
		text = text.replace(' (Eastern Orthodoxy)', '');
		text = text.replace(' (doctrine)', '');
		text = text.replace(' (Calvinism)', '');
		text = text.replace(' (term)', '');
		text = text.replace(' (demon)', '');
		text = text.replace(' (affiliation)', '');
		text = text.replace(' (paranormal)', '');
		text = text.replace(' (title)', '');
		text = text.replace(' (Christian eschatology)', '');
		text = text.replace(' (biblical term)', '');
		text = text.replace(' (virtue)', '');
		text = text.replace(' (religion)', '');
		text = text.replace(' (Christian eschatology)', '');
		text = text.replace(' (philosophy and religion)', '');
		text = text.replace(' (Christian denominational variations)', '');
		text = text.replace(' (Anglican views)', '');
		text = text.replace(' (liturgy)', '');
		text = text.replace(' (Commandments)', '');
		text = text.replace(' (holiday)', '');
		text = text.replace(' (Bible)', '');
		text = text.replace(' (Orthodox liturgy)', '');
		text = text.replace(' (religion)', '');
		text = text.replace('\'', '');
		text = text.replace(' (virtue)', '');
		text = text.replace(' (New Testament)', '');
		text = text.replace(' (chant)', '');
		text = text.replace(' (heresy)', '');
		text = text.replace(' (theology)', '');
		text = text.replace(' (Revelation)', '');
		text = text.replace(' (Christian)', '');
		text = text.replace(' (Christianity)', '');
		text = text.replace(' (philosophy)', '');
	
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