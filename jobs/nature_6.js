// nature_6.js
module.exports = {
	title: 'Nature Words',
	full: 'nature',
	language: 'english',
	type: 'S',
	topic: 'N',
	url: 'http://www.enchantedlearning.com/wordlist/bodiesofwater.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "alluvial fan<br> arroyo<br> basin<br> bay<br> bayou<br> bend<br> bight<br> bog<br> brook<br> canal<br> cataract<br> channel<br> coral reef<br> cove<br> crater lake<br> creek<br> dam<br> delta<br> estuary<br> falls<br> fen<br> firth<br> fjord<br> fork<br> geyser<br> glacier<br> glacier cave<br> gulch<br> gulf<br> gully<br> harbor<br> headland<br> headwaters<br> iceberg<br> ice cliff<br> ice field<br> inlet<br> island<br> islet<br> kettle<br> kill<br> lagoon<br> lake<br> loch<br> mangrove swamp<br> marsh<br> meander<br> mid-ocean ridge<br> millpond<br> moat<br> mouth<br> mud flat<br> narrows<br> neck<br> oasis<br> oxbow lake<br> playa<br> pond<br> pool<br> prairie<br> puddle<br> rapids<br> reservoir<br> ria<br> river<br> riverbed<br> river delta<br> rivulet<br> run<br> salt marsh<br> scarp<br> scree<br> shallows<br> shoal<br> shore<br> shoreline<br> slough<br> sound<br> source<br> spring<br> strait<br> stream<br> subglacial lake<br> swamp<br> tributary<br> wash<br> waterfall<br> watershed<br> waterway<br> wetland".split('<br> ')
		};

		return output;
	}
};