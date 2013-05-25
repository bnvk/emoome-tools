// art_1.js
module.exports = {
	title: 'Science Words',
	full: 'science',
	language: 'english',
	type: 'I',
	topic: 'SC',
	url: 'http://www.enchantedlearning.com/wordlist/sciences.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "aerodynamics<br> agronomy<br> anatomy<br> anthropology<br> archaeology<br> astronomy<br> atmospheric sciences<br> bacteriology<br> biochemistry<br> biology<br> biophysics<br> botany<br> cartography<br> chemistry<br> climatology<br> computer science<br> cosmology<br> criminology<br> dermatology<br> developmental biology<br> earth sciences<br> ecology<br> economics<br> embryology<br> entomology<br> epidemiology<br> ergonomics<br> ethnology<br> evolutionary biology<br> exobiology<br> forestry<br> genetics<br> genomics<br> geology<br> geophysics<br> gerontology<br> glaciology<br> hematology<br> herpetology<br> histology<br> horticulture<br> hydrology<br> ichthyology<br> immunology<br> inorganic chemistry<br> kinesiology<br> kinetics<br> linguistics<br> marine biology<br> materials science<br> mechanics<br> metallurgy<br> meteorology<br> microbiology<br> mineralogy<br> molecular biology<br> morphology<br> neurology<br> neuroscience<br> nuclear physics<br> nutrition<br> oceanography<br> oncology<br> optics<br> organic chemistry<br> ornithology<br> paleontology<br> parasitology<br> pathology<br> petrology<br> physics<br> physiology<br> political science<br> psychology<br> quantum chemistry<br> quantum physics<br> radiology<br> robotics<br> seismology<br> sociobiology<br> sociology<br> taxonomy<br> tectonics<br> thermodynamics<br> toxicology<br> urology<br> virology<br> volcanology<br> vulcanology<br> xenobiology<br> xylology<br> zoology".split('<br> ')
		};

		return output;
	}
};