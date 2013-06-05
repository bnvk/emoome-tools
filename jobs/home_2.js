// home_2.js
module.exports = {
	title: 'Home Words',
	full: 'home',
	language: 'english',
	type: 'S',
	topic: 'H',
	url: 'http://www.enchantedlearning.com/wordlist/house.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "air conditioner<br> appliances<br> attic<br> awning<br> back door<br> baluster<br> backyard<br> barbecue<br> baseboard<br> basement<br> bathroom<br> bathtub<br> beam<br> bedroom<br> blinds<br> broom<br> bunk bed<br> carpet<br> carport<br> ceiling<br> cellar<br> chimney<br> closet<br> clothes dryer<br> clothes washer<br> column<br> concrete<br> cornice<br> counter<br> crib<br> cupboard<br> curtain rod<br> curtains<br> dining room<br> dish washer<br> doggie door<br> doghouse<br> door<br> door bell<br> doorknob<br> door jamb<br> doorway<br> dormer<br> downspout<br> downstairs<br> drain<br> drapes<br> driveway<br> dryer<br> duct<br> dustpan<br> eaves<br> electrical outlet<br> electrical system<br> entrance<br> entry<br> entryway<br> family room<br> fan<br> faucet<br> fence<br> fenced yard<br> fireplace<br> floor<br> foundation<br> frame<br> front door<br> front stoop<br> furnace<br> furniture<br> fuse box<br> gable<br> garage<br> garage door<br> garage door opener<br> garbage can<br> garden<br> garden shed<br> gate<br> girder<br> greenhouse<br> gutters<br> hall<br> hall closet<br> hallway<br> hamper<br> heater<br> hinge<br> home<br> hose<br> house<br> inglenook<br> insulation<br> jamb<br> key<br> kitchen<br> ladder<br> lamp<br> lanai<br> laundry<br> laundry room<br> lawnmower<br> library<br> light<br> light switch<br> linen closet<br> lintel<br> living room<br> lock<br> loft<br> lumber<br> mailbox<br> mantle<br> mat<br> mirror<br> mop<br> newel<br> nook<br> nursery<br> overhang<br> painting<br> paneling<br> pantry<br> patio<br> picture<br> picture frame<br> plumbing<br> pool<br> porch<br> portico<br> quilt<br> railing<br> rake<br> range<br> recreation room<br> roof<br> room<br> rug<br> sash<br> screen door<br> shed<br> shelf<br> shelves<br> shingle<br> shower<br> shutters<br> siding<br> sill<br> sink<br> skylight<br> sliding glass door<br> soffit<br> steps<br> staircase<br> stairs<br> stairway<br> stoop<br> storage shed<br> storm door<br> stove<br> swimming pool<br> threshhold<br> throw rug<br> toilet<br> trash can<br> trellis<br> trim<br> tub<br> upstairs<br> vacuum cleaner<br> venetian blinds<br> vase<br> vent<br> wainscotting<br> walkway<br> wall<br> wall-to-wall carpet<br> washer<br> washing machine<br> waste basket<br> water heater<br> weather stripping<br> welcome mat<br> window<br> window pane<br> window sill<br> wood stove<br> yard".split('<br> ')
		};

		return output;
	}
};