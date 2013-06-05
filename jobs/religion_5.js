// religion_5.js
module.exports = {
	title: 'Religion Words',
	full: 'religion',
	language: 'english',
	type: 'I',
	topic: 'RE',
	url: 'http://experiment/budhism.html',
	element: 'p font b font font',
	filter: [
     'Conditioned (compounded)',
     'Dedication of Merit',
     'Delusion (Ignorance)',
	  'Way (Path, Tao)'
	],
	clean: function(text) {

		text = text.replace('\'', '');
		text = text.replace('Agaru/', '');
		text = text.replace('/Aguru', '');
		text = text.replace(' (Amida, Amita, Amitayus)', '');
		text = text.replace(' (kalpa)', '');
		text = text.replace(' (Bodhicitta, Great Mind)', '');
		text = text.replace(' (Brahmajala Sutra)', '');
		text = text.replace(' (Path of the Sages, Self-Power Path)', '');
		text = text.replace(' (Worldly Dusts)', '');
		text = text.replace(' (Skillful means, Skill-in-means, Upaya)', '');
		text = text.replace(' (Five Sensual Pleasures)', '');
		text = text.replace(' (Corruptions,\nDefilements, Depravities, Filths, Impurities)', '');
		text = text.replace(' (Four Universal\nVows)', '');
		text = text.replace(' (Shih Chih,\nSeishi)', '');
		text = text.replace(' (Transcendental)', '');
		text = text.replace(' (Skt.\ntrikaya)', '');
		text = text.replace(' (Three Precious\nOnes, Three Treasures)', '');
		text = text.replace(' (Ten Evil Deeds,\nTen Sins)', '');
		text = text.replace(' (Good Wealth)', '');
		text = text.replace(' (Six\nPaths)', '');
		text = text.replace(' (2nd/3rd cent.)', '');
		text = text.replace(' (2nd/3rd cent.)', '');
	
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