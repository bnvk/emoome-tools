// body_1.js
module.exports = {
	title: 'Body Words',
	full: 'body',
	language: 'english',
	type: 'P',
	topic: 'B',
	url: 'http://www.enchantedlearning.com/wordlist/doctor.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "abscess<br> ache<br> acute<br> artery<br> bacteria<br> black-and-blue<br> blister<br> blood<br> blood pressure<br> bone<br> braces<br> breathe<br> breathing<br> cartilage<br> circulatory system<br> gland<br> growth<br> heart<br> heartbeat<br> height<br> jaw<br> joints<br> kidney<br> lungs<br> mucus<br> muscle<br> nerves<br> plasma<br> pulse<br> pus<br> reflex<br> respiratory system<br> scab<br> skeleton<br> skull<br> spine<br> spinal<br> stomach<br> stomach ache<br> swollen<br> tendon<br> tumor<br> urine<br> vein<br> wart".split('<br> ')
		};

		return output;
	}
};