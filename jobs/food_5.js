// food_5.js
module.exports = {
	title: 'Food Words',
	full: 'food',
	language: 'english',
	type: 'I',
	topic: 'F',
	url: 'http://www.enchantedlearning.com/wordlist/foodweb.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "apex predator<br> autotroph<br> bacterium<br> calorie<br> carnivore<br> carnivorous<br> chain<br> decomposer<br> detrivore<br> diet<br> eat<br> efficiency<br> energy<br> energy transfer<br> equilibrium<br> filter feeder<br> folivore<br> leaf-eater<br> food<br> food chain<br> food cycle<br> food network<br> food web<br> frigivore<br> fruit-eater<br> fungus<br> granivore<br> seed-eater<br> herbivore<br> herbivorous<br> heterotroph<br> hypercarnivore<br> hypocarnivore<br> ingest<br> insectivore<br> insectivorous<br> meat-eater<br><br> mesocarnivore<br> mucivores<br> sap eater<br> necativore<br> nectar-eater<br> obligate carnivore<br> omnivore<br> omnivorous<br> organism<br> palynivores<br> pollen eater<br> photosynthesis<br> phytoplankton<br> piscivore<br> plant<br> plant-eater<br> predation<br> predator<br> prey<br> primary consumer<br> primary producer<br> production efficiency<br> quaternary consumer<br> scavenge<br> scavenger<br> secondary consmer<br> tertiary consumer<br> top predator<br> trophic level<br> vegetarian<br> web<br> xylophage<br> wood eater<br> zooplankton".split('<br> ')
		};

		return output;
	}
};