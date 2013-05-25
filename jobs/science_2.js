// art_1.js
module.exports = {
	title: 'Science Words',
	full: 'science',
	language: 'english',
	type: 'I',
	topic: 'SC',
	url: 'http://www.enchantedlearning.com/wordlist/science.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "astrophysics<br> astronomy<br> atom<br> beaker<br> biochemistry<br> biology<br> botany<br> bunsen burner<br> burette<br> cell<br> chemical<br> chemistry<br> climate<br> climatologist<br> control<br> cuvette<br> data<br> datum<br> electricity<br> electrochemist<br> element<br> energy<br> entomology<br> evolution<br> experiment<br> fact<br> flask<br> fossil<br> funnel<br> genetics<br> geology<br> geophysics<br> glassware<br> graduated cylinder<br> gravity<br> herpetology<br> hypothesis<br> ichthyology<br> immunology<br> lab<br> laboratory<br> laws<br> lepidoptery<br> magnetism<br> mass<br> matter<br> measure<br> meteorologist<br> meteorology<br> microbiologist<br> microbiology<br> microscope<br> mineral<br> mineralogy<br> molecule<br> motion<br> observe<br> observatory<br> organism<br> ornithology<br> paleontology<br> particle<br> petri dish<br> phase<br> physical science<br> physics<br> pipette<br> quantum mechanics<br> radiology<br> research<br> retort<br> scale<br> science<br> scientist<br> seismology<br> telescope<br> temperature<br> test tube<br> theory<br> thermometer<br> tissue<br> variable<br> virologist<br> volcanology<br> volume<br> volumetric flask<br> watch glass<br> weather<br> weigh<br> zoology".split('<br> ')
		};

		return output;
	}
};