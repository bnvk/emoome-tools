// nature_7.js
module.exports = {
	title: 'Nature Words',
	full: 'nature',
	language: 'english',
	type: 'S',
	topic: 'N',
	url: 'http://www.enchantedlearning.com/wordlist/landforms.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "alluvial fan<br> arch<br> archipelago<br> arête<br> arroyo<br> atoll<br> badlands<br> bar<br> barrier island<br> basin<br> bay<br> bayou<br> beach<br> bight<br> bluff<br> box canyon<br> bowl<br> brook<br> butte<br> caldera<br> canal<br> canyon<br> cape<br> cataract<br> cave<br> cavern<br> channel<br> chasm<br> chimney<br> cinder cone<br> cirque<br> cliff<br> coast<br> coastline<br> col<br> cove<br> crag<br> crater lake<br> creek<br> crest<br> crevasse<br> dale<br> dell<br> delta<br> depression<br> desert<br> divide<br> dome<br> drift<br> dune<br> equator<br> escarpment<br> estuary<br> falls<br> fault<br> firth<br> fissure<br> fjord<br> foothills<br> fork<br> gap<br> geology<br> geomorphology<br> geyser<br> glacier<br> glacier cave<br> glen<br> gorge<br> grotto<br> gulch<br> gulf<br> gully<br> headland<br> headwaters<br> highland<br> hill<br> hillside<br> hollow<br> iceberg<br> ice cliff<br> ice field<br> inlet<br> island<br> islet<br> isthmus<br> knob<br> knoll<br> lagoon<br> lake<br> lakebed<br> landform<br> latitude<br> lava dome<br> lava tube<br> ledge<br> loess<br> longitude<br> lowland<br> mainland<br> marsh<br> meander<br> mesa<br> mid-ocean ridge<br> moraine<br> mound<br> mountain<br> mountain pass<br> mountain peak<br> mouth<br> mud flat<br> narrows<br> natural arch<br> neck<br> oasis<br> ocean<br> oceanic trench<br> overhang<br> overlook<br> oxbow lake<br> pass<br> peak<br> peninsula<br> plain<br> plateau<br> playa<br> point<br> pond<br> prairie<br> promontory<br> range<br> rapids<br> ravine<br> reef<br> ria<br> ridge<br> rift valley<br> rill<br> rise<br> river<br> riverbed<br> river delta<br> rivulet<br> rock<br> salt marsh<br> sandbar<br> sand dune<br> scarp<br> scree<br> shallows<br> shoal<br> shore<br> shoreline<br> slope<br> slough<br> sound<br> source<br> spit<br> spring<br> strait<br> stream<br> summit<br> surf<br> swamp<br> tableland<br> tar pit<br> terrace<br> terrain<br> tidal basin<br> topography<br> tributary<br> tundra<br> u-shaped valley<br> vale<br> valley<br> vent<br> volcano<br> waterfall<br> watershed<br> wetland<br> yardang".split('<br> ')
		};

		return output;
	}
};