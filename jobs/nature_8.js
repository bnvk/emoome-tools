// nature_8.js
module.exports = {
	title: 'Nature Words',
	full: 'nature',
	language: 'english',
	type: 'S',
	topic: 'N',
	url: 'http://www.enchantedlearning.com/wordlist/plants.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "acorn<br> agriculture<br> alfalfa<br> alternate leaves<br> angiosperm<br> annual<br> anther<br> apical meristem<br> autotroph<br> axil<br> axilary bud<br> bamboo<br> bark<br> bean<br> berry<br> biennial<br> blade<br> blossom<br> bromeliad<br> botany<br> bract<br> branch<br> brush<br> bud<br> bulb<br> bulbel<br> bush<br> cactus<br> calyx<br> canopy<br> carpel<br> cleft leaf<br> clover<br> composite flower<br> compound leaf<br> cone<br> cork<br> corm<br> corolla<br> crenate leaf<br> deciduous<br> dentate leaf<br> dicot<br> embryo<br> emergents<br> endosperm<br> entire<br> epicotyl<br> evergreen<br> fern<br> fertilizer<br> filament<br> flora<br> flower<br> foliage<br> forest<br> frond<br> fruit<br> garden<br> germinate<br> ginkgo<br> grain<br> grass<br> grove<br> grow<br> guard cell<br> gum<br> hardy<br> hastate<br> herb<br> horsetail<br> horticulture<br> hybrid<br> imperfect flower<br> incomplete flower<br> inflorescence<br> internode<br> ivy<br> jungle<br> juniper<br> kapok tree<br> kelp<br> kudzu<br> lamina<br> lanceolate leaf<br> lateral bud<br> leaf<br> leaflet<br> lead scar<br> legume<br> lily<br> lobed<br> margin<br> meristem<br> midrib<br> monocot<br> moss<br> nectar<br> needle<br> netted<br> node<br> nut<br> opposite leaves<br> ovary<br> palm<br> palmate<br> parted leaf<br> peduncle<br> perennial<br> perfect flower<br> petal<br> petiole<br> petrified wood<br> phloem<br> photosynthesis<br> pinnate<br> pistil<br> pith<br> plumule<br> poison ivy<br> pollen<br> pollinate<br> prickle<br> pulse<br> rachis<br> rain forest<br> reniform<br> resin<br> reticulate<br> rings<br> root<br> root cap<br> root hairs<br> root tip<br> rootstock<br> sage brush<br> sap<br> sapling<br> sea weed<br> seed<br> seedling<br> seed pod<br> sepal<br> serrate leaf<br> shamrock<br> shoot<br> shrub<br> simple leaf<br> soil<br> spore<br> stand<br> stalk<br> spine<br> sprout<br> stamen<br> stem<br> stigma<br> stipule<br> stoma<br> style<br> succulents<br> sunlight<br> tap root<br> terminal bud<br> thorn<br> toothed<br> tree<br> tree fern<br> trunk<br> tuber<br> tumbleweeds<br> twig<br> understory<br> undulate leaf margin<br> vascular plant<br> vegetable<br> vegetation<br> vein<br> venation<br> vine<br> weed<br> whorled<br> wood<br> woody<br> xerophyte<br> xylem<br> yucca".split('<br> ')
		};

		return output;
	}
};