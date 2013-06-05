// transportation_3.js
module.exports = {
	title: 'Transportation Words',
	full: 'transportation',
	language: 'english',
	type: 'D',
	topic: 'TR',
	url: 'http://www.enchantedlearning.com/wordlist/car.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "auto<br> automobile<br> buggy<br> car<br> cloth-top<br> compact<br> convertible<br> coupe<br> cruiser<br> dragster<br> electric car<br> four-door<br> four-wheel drive<br> gas powered<br> gas-electric<br> hard top<br> hatchback<br> hearse<br> hot rod<br> hum-vee<br> hybrid<br> jeep<br> limo<br> limousine<br> low-rider<br> luxury car<br> minivan<br> off-road vehicle<br> patrol car<br> race car<br> ragtop<br> roadster<br> rotary engine<br> runabout<br> rv<br> sedan<br> soft-top<br> solar powered<br> sports car<br> sports utility vehicle<br> station wagon<br> stock car<br> stretch limo<br> subcompact<br> suv<br> taxi<br> taxi cab<br> two-door<br> van".split('<br> ')
		};

		return output;
	}
};