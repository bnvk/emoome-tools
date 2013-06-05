// smell_1.js
module.exports = {
	title: 'Smell Words',
	full: 'smell',
	language: 'english',
	type: 'S',
	topic: 'SM',
	url: 'http://thesaurus.com/browse/smell',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "aroma, bouquet, emanation, essence, flavor, fragrance, incense, perfume, redolence, savor, scent, spice, stench, stink, tang, trace, trail, whiff, malodorous, funk, reek, smell to high heaven, stench, stink, whiff, anosmatic, anosmic, aosmic, deodorized, deodorizing, fresh, gamy, graveolent, halituous, heady, hircine, inodorate, inodorous, moschate, nasal, noctuolent, odoriferous, odorous, olfactory, osmagogue, osphretic, pungent, quick, scentless, smelling, strong, unscented, wanting smell, aura, balm, fragrance, incense, odor, perfume, redolence, savor, scent, smell, spice, aroma, faint breeze, flatus, flutter, gust, odor, puff, sigh, smell, vapor, waft, whiff, zephyr, aroma, aura, balm, bouquet, incense, perfume, redolence, scent, smell, spice, stench, stink".split(', ')
		};

		return output;
	}
};