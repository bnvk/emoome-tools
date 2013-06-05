// architecture_3.js
module.exports = {
	title: 'Architecture Words',
	full: 'architecture',
	language: 'english',
	type: 'S',
	topic: 'AC',
	url: 'http://www.enchantedlearning.com/wordlist/housing.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "abode<br> adobe house<br> a-frame<br> apartment<br> attached house<br> barracks<br> beach house<br> boarding house<br> brownstone<br> building<br> bungalow<br> bunkhouse<br> cabin<br> caravan<br> castle<br> chalet<br> chateau<br> condo<br> condominium<br> co-op<br> cottage<br> country house<br> crib<br> dacha<br> detached house<br> domicile<br> dorm<br> dormitory<br> double-wide<br> duplex<br> dwelling<br> earth-sheltered house<br> efficiency apartment<br> estate<br> farmhouse<br> flat<br> gabled house<br> guest house<br> hacienda<br> hall<br> high-rise home<br> hotel<br> house<br> houseboat<br> household<br> house trailer<br> housing project<br> hunting lodge<br> hut<br> igloo<br> inn<br> lean-to<br> living quarters<br> lodge<br> lodging<br> loft<br> log cabin<br> longhouse<br> maisonette<br> manor<br> mansion<br> microapartment<br> mobile home<br> motel<br> palace<br> penthouse<br> pied-á-terre<br> primary residence<br> pup tent<br> quarters<br> ranch house<br> real estate<br> residence<br> residential hall<br> rooming house<br> roundhouse<br> row house<br> saltbox<br> shack<br> shelter<br> skyscraper<br> split-level house<br> studio apartment<br> suite<br> summer house<br> tepee<br> tenement<br> tent<br> terraced house<br> tipi<br> townhouse<br> tract house<br> trailer home<br> treehouse<br> triplex<br> tudor<br> unit<br> vacation house<br> villa<br> wickiup<br> wigwam<br> yaodong<br> yurt".split('<br> ')
		};

		return output;
	}
};