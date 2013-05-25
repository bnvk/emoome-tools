// animals_3.js
module.exports = {
	title: 'Animal Words',
	full: 'animals',
	language: 'english',
	type: 'S',
	topic: 'A',
	url: 'http://www.enchantedlearning.com/wordlist/insect.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "admiral butterfly<br> ambush bug<br> ant<br> aphid<br> armyworm<br> assassin bug<br> atlas moth<br> backswimmer<br> bedbug<br> bee<br> beetle<br> blue morpho butterfly<br> bluet<br> borer<br> brown butterfly<br> buckeye butterfly<br> bug<br> bumblebee<br> butterfly<br> carpenter ant<br> caterpillar<br> chrysalis<br> cicada<br> cockroach<br> comma butterfly<br> copper butterfly<br> crane fly<br> cricket<br> cutworm<br> damselfly<br> darkling beetle<br> dragonfly<br> dung beetle<br> earwig<br> egg<br> fire ant<br> firefly<br> flea<br> fly<br> fritillary butterfly<br> fruitfly<br> gnat<br> gossamer-winged butterfly<br> grasshopper<br> green darner dragonfly<br> ground beetle<br> grub<br> gypsy moth<br> hairstreak butterfly<br> harlequin bug<br> horse fly<br> honeybee<br> hornet<br> house fly<br> hover fly<br> imago<br> insect<br> japanese beetle<br> julia butterfly<br> jumping bean<br> junebug<br> katydid<br> kissing bug<br> ladybug<br> lacewing<br> larva<br> leafcutter ant<br> leafhopper<br> lice<br> lightning bug<br> locust<br> longhorn beetle<br> louse<br> luna moth<br> maggot<br> mantid<br> mantis<br> mayfly<br> meadowhawk<br> mealworm<br> metalmark butterfly<br> metamorphosis<br> midge<br> milkweed bug<br> monarch<br> morpho<br> mosquito<br> moth<br> nymph<br> oregon silverspot butterfly<br> owl butterfly<br> painted lady butterfly<br> paper wasp<br> planthopper<br> pond skater<br> praying mantid<br> praying mantis<br> pupa<br> queen alexandra's birdwing butterfly<br> roach<br> robber fly<br> scarab<br> silkworm<br> silverfish<br> skipper<br> snout butterfly<br> spittlebug<br> springtail<br> stag beetle<br> stink bug<br> stonefly<br> sulphur butterfly<br> swallowtail butterfly<br> termite<br> thrip<br> tiger beetle<br> tiger moth<br> tsetse fly<br> ulysses butterfly<br> viceroy butterfly<br> walkingstick<br> wasp<br> water boatman<br> waterbug<br> waterstrider<br> weevil<br> wood-borer<br> wood nymph butterfly<br> woolly bear caterpillar<br> yellowjacket<br> yellow-white butterfly<br> zebra longwing butterfly<br> zebra swallowtail butterfly".split('<br> ')
		};

		return output;
	}
};