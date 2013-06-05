// measurement_1.js
module.exports = {
	title: 'Measurement Words',
	full: 'measurement',
	language: 'english',
	type: 'I',
	topic: 'ME',
	url: 'http://www.enchantedlearning.com/wordlist/measurement.shtml',
	element: false,
	filter: [],
	clean: function(text) {

		var output = {
			type: "array",
			data: "acre<br> angstrom<br> area<br> bale<br> baker's dozen<br> barrel<br> bit<br> bolt<br> breadth<br> bulk<br> bushel<br> byte<br> carat<br> case<br> centimeter<br> cord<br> cord foot<br> cubic<br> cubic centimeter<br> cubic inch<br> cubic meter<br> cubic mile<br> cubic yard<br> cubit<br> cup<br> dash<br> decigram<br> deciliter<br> decimal<br> decimeter<br> degree<br> depth<br> digit<br> dozen<br> dram<br> drop<br> dry quart<br> dry gallon<br> em<br> en<br> fathom<br> feet<br> fermi<br> fluid ounce<br> folio<br> foot<br> furlong<br> gallon<br> gauge<br> gill<br> grain<br> gram<br> grit<br> gross<br> gross ton<br> gutenberg<br> hand<br> hectare<br> height<br> hundredweight<br> inch<br> jerib<br> karat<br> kilo<br> kilogram<br> kilometer<br> knot<br> league<br> length<br> light-second<br> light-year<br> liquid ounce<br> liter<br> mass<br> measure<br> megameter<br> megaparsec<br> megapixel<br> megaton<br> meter<br> metric system<br> microgram<br> microliter<br> micron<br> mile<br> milligram<br> milliliter<br> millimeter<br> minute<br> mole<br> nanometer<br> nautical mile<br> nose<br> octad<br> octant<br> octave<br> order of magnitude<br> ounce<br> palm<br> parsec<br> peck<br> pennyweight<br> percent<br> percentile<br> picogram<br> picoliter<br> picometer<br> pinch<br> pint<br> pixel<br> pound<br> quadrant<br> quantity<br> quart<br> quarter<br> quartile<br> radian<br> ream<br> rod<br> ruler<br> sack<br> scale<br> score<br> sheaf<br> skein<br> smidgen<br> smoot<br> spoon<br> spoonful<br> square<br> square centimeter<br> square foot<br> square inch<br> square kilometer<br> square mile<br> square yard<br> stade<br> standard<br> stone<br> tablespoon<br> teaspoon<br> thermometer<br> ton<br> tonne<br> troy ounce<br> troy pound<br> troy weight<br> unit<br> volume<br> weigh<br> weight<br> width<br> yard<br> yardstick<br> zoll".split('<br> ')
		};

		return output;
	}
};