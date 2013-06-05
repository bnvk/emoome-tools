// nature_12.js
module.exports = {
	title: 'Nature Words',
	full: 'nature',
	language: 'english',
	type: 'S',
	topic: 'N',
	url: 'http://www.enchantedlearning.com/wordlist/camping.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "acre<br> acreage<br> agriculture<br> animals<br> bale of hay<br> baler<br> barley<br> barn<br> bee<br> beehive<br> bison<br> boar<br> breed<br> bucket<br> buffalo<br> bull<br> calf<br> cat<br> cattle<br> chick<br> chicken<br> combine<br> coop<br> corn<br> cow<br> crops<br> crow<br> cultivator<br> dairy<br> dog<br> donkey<br> drake<br> duck<br> duckling<br> egg<br> ewe<br> fallow<br> farm<br> farmer<br> farmhouse<br> feed<br> fence<br> fertilizer<br> field<br> flock<br> foal<br> food<br> fruit<br> gander<br> gate<br> geese<br> goat<br> goose<br> grains<br> grow<br> harvest<br> harvester<br> hatchery<br> hay<br> haystack<br> hen<br> herd<br> hive<br> hoe<br> hog<br> honey<br> honeybee<br> horse<br> incubator<br> insecticide<br> irrigation<br> jack (male donkey)<br> jenny (female donkey)<br> jersey cow<br> kid<br> lamb<br> land<br> llama<br> longhorn<br> machete<br> mare<br> meadow<br> milk<br> mower<br> mulch<br> mule<br> oats<br> orchard<br> ox<br> pail<br> pasture<br> pick<br> pickaxe<br> pig<br> piglet<br> plant<br> plow<br> poult<br> poultry<br> produce<br> pullet<br> rabbit<br> rake<br> ram<br> ranch<br> reap<br> rice<br> ripe<br> roost<br> rooster<br> rye<br> scarecrow<br> scythe<br> seeds<br> shears<br> sheep<br> shepherd<br> shovel<br> sickle<br> silo<br> soil<br> sow<br> stable<br> stallion<br> steer<br> swine<br> tend<br> till<br> tiller<br> tractor<br> trough<br> trowel<br> turkey<br> udder<br> vegetable<br> water<br> weeder<br> weeds<br> wheat<br> windmill<br> yak".split('<br> ')
		};

		return output;
	}
};