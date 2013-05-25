// animals_2.js
module.exports = {
	title: 'Animal Words',
	full: 'animals',
	language: 'english',
	type: 'S',
	topic: 'A',
	url: 'http://www.enchantedlearning.com/wordlist/amphibian.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "amphibian<br> amphiuma<br> army of frogs<br> barking frog<br> black toad<br> brook salamander<br> bullfrog<br> caecilian<br> clawed frog<br> climbing salamander<br> common frog<br> crested newt<br> cricket frog<br> disc-tongued frog<br> dusky salamander<br> dwarf siren<br> eastern newt<br> ensatina<br> european toad<br> fire-belly newt<br> fire salamander<br> fork-tongued frog<br> frog<br> froglet<br> gerrothorax<br> ghost frog<br> giant salamander<br> glass frog<br> goliath frog<br> gold frog<br> ground frog<br> hellbender<br> horned frog<br> indonesian floating frog<br> jefferson salamander<br> knobby newt<br> knot of toads<br> leopard frog<br> litter frog<br> long-toed salamander<br> mantella frog<br> mexican treefrog<br> moss frog<br> mudpuppy<br> mud salamander<br> narrow-mouthed frog<br> natterjack<br> newt<br> ornate horned frog<br> paddle-tail newt<br> painted frog<br> poison arrow frog<br> poison dart frog<br> pollywog<br> red-legged frog<br> red eft<br> red-eyed tree frog<br> red salamander<br> rice frog<br> saddleback toad<br> salamander<br> sedge frog<br> shovelnose frog<br> siren<br> spadefoot<br> spotted newt<br> spring peeper frog<br> spring salamander<br> tadpole<br> tailed frog<br> toad<br> tongueless frog<br> torrent salamander<br> treefrog<br> true frog<br> true toad<br> vietnamese tree frog<br> warty newt<br> waterdog<br> water frog<br> western toad<br> wood frog<br> woodlands salamander<br> yellow-legged frog".split('<br> ')
		};

		return output;
	}
};