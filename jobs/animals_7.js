// animals_3.js
module.exports = {
	title: 'Animal Words',
	full: 'animals',
	language: 'english',
	type: 'S',
	topic: 'A',
	url: 'http://www.enchantedlearning.com/wordlist/reptiles.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "adder<br> african rock python<br> alligator<br> american crocodile<br> anaconda<br> angonoka<br> anole<br> asp<br> basilisk<br> bearded dragon<br> black caiman<br> black racer<br> blue-tongued skink<br> boa constrictor<br> box turtle<br> bull snake<br> caiman<br> chameleon<br> cobra<br> collared lizard<br> copperhead<br> coral snake<br> corn snake<br> cottonmouth<br> crocodile<br> cryptoclidus<br> desert tortoise<br> desmatosuchus<br> diamondback rattlesnake<br> emerald tree boa<br> frilled lizard<br> gaboon viper<br> galapagos tortoise<br> garter snake<br> gavial<br> gecko<br> gharial<br> gila monster<br> girdled lizard<br> glass lizard<br> gopher snake<br> green iguana<br> ground skink<br> horned lizard<br> iguana<br> indigo snake<br> jamaican boa<br> king cobra<br> kingsnake<br> komodo dragon<br> leatherback turtle<br> liopleurodon<br> lizard<br> loggerhead turtle<br> mamba<br> map turtle<br> monitor lizard<br> mountain viper<br> mud snake<br> mud turtle<br> musk turtle<br> nile crocodile<br> osage copperhead<br><br> painted turtle<br> pine snake<br> pit viper<br> ploughshare tortoise<br> postosuchus<br> python<br> racer snake<br> rat snake<br> rattlesnake<br> reptile<br> ribbon snake<br> ringneck snake<br> sea turtle<br> skink<br> slow worm<br> snake<br> snapping turtle<br> softshell turtle<br> spectacled caiman<br> spiny lizard<br> taipan<br> timber rattler<br> tortoise<br> tuatara<br> turtle<br> twig snake<br> veiled chameleon<br> viper<br> water moccasin<br> water turtle<br> whipsnake<br> whiptail lizard<br> yellow-foot tortoise".split('<br> ')
		};

		return output;
	}
};