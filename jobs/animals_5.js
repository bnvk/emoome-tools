// animals_3.js
module.exports = {
	title: 'Animal Words',
	full: 'animals',
	language: 'english',
	type: 'S',
	topic: 'A',
	url: 'http://www.enchantedlearning.com/wordlist/fish.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "anchovy<br> angelfish<br> angelshark<br> barb<br> barracuda<br> basking shark<br> bass<br> blenny<br> blowfish<br> bluefin tuna<br> blue shark<br> bonito<br> bony fish<br> bull shark<br> carp<br> catfish<br> chub<br> clownfish<br> cod<br> coelacanth<br> cookiecutter shark<br> crappie<br> darter<br> devil ray<br> dogfish<br> dory<br> dragonfish<br> dunkleosteus<br> eel<br> electric eel<br> elver<br> emperor angelfish<br> fish<br> flounder<br> flying fish<br> galapagos shark<br> gar<br> glassfish<br> goby<br> goldfish<br> grayling<br> great white shark<br> greenland shark<br> grouper<br> grunion<br> gulper eel<br> guppy<br> haddock<br> hagfish<br> hake<br> halibut<br> hammerhead shark<br> hatchetfish<br> herring<br> humuhumu-nukunuku-apua'a<br> icefish<br> jackfish<br> john dory<br> koi<br> lake trout<br> lamprey<br> lanternfish<br> lemon shark<br> ling cod<br> loach<br> luminous shark<br> lungfish<br> mackerel<br> mako shark<br> manta ray<br> marlin<br> megalodon<br> megamouth shark<br> minnow<br> monkfish<br> moray eel<br> mullet<br> needlefish<br> nurse shark<br> oarfish<br> orange roughy<br> orthacanthus<br> paddlefish<br> parrotfish<br> perch<br> pike<br> pilot fish<br> piranha<br> pollock<br> pompano<br> porgy<br> port jackson shark<br> pufferfish<br> pupfish<br> queen triggerfish<br> quillfish<br> ray<br> remora<br> rockfish<br> roughy<br> sailfish<br> salmon<br> sardine<br> sawfish<br> sculpin<br> seabass<br> seadragon<br> seahorse<br> shad<br> shark<br> skate<br> smelt<br> snapper<br> sole<br> stingray<br> sturgeon<br> sunfish<br> swordfish<br> tarpon<br> tetra<br> three-spine stickleback<br> thresher shark<br> tiger shark<br> triggerfish<br> trout<br> tuna<br> tunny<br> turbot<br> upside-down catfish<br> velvetfish<br> viperfish<br> walleye<br> whale shark<br> whiting<br> wrasse<br> x-ray tetra<br> yellowjack<br> yellowtail<br> zebra bullhead shark<br> zebrafish".split('<br> ')
		};

		return output;
	}
};