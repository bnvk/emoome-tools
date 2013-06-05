// objects_1.js
module.exports = {
	title: 'Objects Words',
	full: 'objects',
	language: 'english',
	type: 'D',
	topic: 'OB',
	url: 'http://www.enchantedlearning.com/wordlist/householddevices.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "air conditioner<br> alarm clock<br> answering machine<br> bbq grill<br> barbecue grill<br> blender<br> blowdryer<br> burglar alarm<br> calculator<br> camera<br> can opener<br> cd player<br> ceiling fan<br> cell phone<br> clock<br> clothes dryer<br> clothes washer<br> coffee grinder<br> coffee maker<br> computer<br> convection oven<br> copier<br> crock pot<br> curling iron<br> dishwasher<br> doorbell<br> dryer<br> edger<br> electric blanket<br> electric drill<br> electric fan<br> electric guitar<br> electric keyboard<br> electric pencil sharpener<br> electric razor<br> electric toothbrush<br> espresso maker<br> fan<br> fax machine<br> fire alarm<br> fire extinguisher<br> fireplace<br> flashlight<br> flatscreen tv<br> food processor<br> freezer<br> furnace<br> garage door<br> garbage disposal<br> gps<br> grill<br> hair clippers<br> hair dryer<br> headphones<br> heater<br> hood<br> hot plate<br> humidifier<br> ice cream maker<br> iron<br> juice<br> kerosene heater<br> lamp<br> lantern<br> laptop<br> lawn mower<br> leaf blower<br> light<br> microwave oven<br> mixer<br> mousetrap<br> mp3 player<br> oven<br> percolator<br> pressure cooker<br> printer<br> radio<br> range<br> record player<br> refrigerator<br> rotisserie<br> scale<br> scanner<br> sewing machine<br> smoke detector<br> stapler<br> stereo<br> stove<br> telephone<br> television<br> timer<br> toaster<br> toaster oven<br> torch<br> trash compactor<br> trimmer<br> tv<br> vacuum cleaner<br> vaporizer<br> vcr<br> video camera<br> video game machine<br> waffle iron<br> walkie-talkie<br> washer<br> washer and dryer<br> washer & dryer<br> washing machine<br> watch<br> water heater".split('<br> ')
		};

		return output;
	}
};