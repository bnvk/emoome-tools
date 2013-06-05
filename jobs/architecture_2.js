// art_1.js
module.exports = {
	title: 'Architecture Words',
	full: 'architecture',
	language: 'english',
	type: 'S',
	topic: 'AC',
	url: 'http://www.enchantedlearning.com/wordlist/buildings.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "abbey<br> a-frame<br> aircraft hangar<br> airport terminal<br> amphitheater<br> apartment building<br> aqueduct<br> arch<br> arena<br> armory<br> assembly hall<br> barn<br> barracks<br> beach house<br> boathouse<br> boarding house<br> bowling alley<br> bridge<br> brownstone<br> building<br> bungalow<br> bunkhouse<br> bunker<br> cabana<br> cabin<br> capitol<br> carport<br> castle<br> catacomb<br> cathedral<br> chalet<br> chapel<br> chateau<br> church<br> cinema<br> city hall<br> clubhouse<br> college<br> compound<br> concert hall<br> condominium<br> conservatory<br> cottage<br> courthouse<br> crypt<br> depot<br> detached house<br> dock<br> dome<br> dormitory<br> double wide<br> duplex<br> dwelling<br> earth-sheltered house<br> embassy<br> exposition hall<br> factory<br> farm<br> farmhouse<br> ferry slip<br> ferry terminal<br> firehouse<br> fire station<br> folly<br> forge<br> fort<br> fortress<br> foundry<br> gallery<br> garage<br> gas station<br> gazebo<br> geodesic dome<br> granary<br> greenhouse<br> gym<br> gymnasium<br> hall<br> hangar<br> haunted house<br> headquarters<br> high-rise<br> home<br> hospital<br> hostel<br> hotel<br> hot house<br> house<br> houseboat<br> housing project<br> hunting lodge<br> hut<br> igloo<br> jail<br> kiosk<br> laboratory<br> lean-to<br> library<br> lighthouse<br> lodge<br> log cabin<br> longhouse<br> mall<br> manor<br> manse<br> mansion<br> marina<br> market<br> mausoleum<br> meeting hall<br> mill<br> minaret<br> mobile home<br> monastery<br> monument<br> mosque<br> motel<br> museum<br> nuclear power plant<br> nursing home<br> observatory<br> office building<br> opera house<br> outbuilding<br> outhouse<br> pagoda<br> palace<br> parking garage<br> parliament<br> pavilion<br> plant<br> playhouse<br> police station<br> pool house<br> post office<br> power plant<br> prefab building<br> prison<br> pump house<br> pyramid<br> quonset hut<br> railway station<br> ranch<br> rectory<br> refinery<br> residence<br> restaurant<br> roller rink<br> roundhouse<br> rowhouse<br> school<br> shack<br> shed<br> shelter<br> shopping center<br> shopping mall<br> shrine<br> silo<br> skating rink<br> skyscraper<br> skyway<br> smokestack<br> spire<br> split-level house<br> stable<br> stadium<br> state house<br> station<br> steeple<br> store<br> storehouse<br> strip mall<br> structure<br> studio<br> supermarket<br> symphony<br> synagogue<br> temple<br> tenement<br> tent<br> terminal<br> theater<br> tipi<br> toll house<br> tomb<br> tower<br> townhouse<br> treehouse<br> triplex<br> tudor house<br> university<br> vault<br> vicarage<br> villa<br> warehouse<br> watermill<br> workshop<br> yurt".split('<br> ')
		};

		return output;
	}
};