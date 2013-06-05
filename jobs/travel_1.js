// travel_1.js
module.exports = {
	title: 'Travel Words',
	full: 'travel',
	language: 'english',
	type: 'U',
	topic: 'TV',
	url: 'http://www.enchantedlearning.com/wordlist/vacation.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "airfare<br> airplane<br> airport<br> amusement park<br> automobile<br> backpack<br> baggage<br> bags<br> bathing suit<br> beach<br> bicycle<br> bike<br> binoculars<br> boat<br> bus<br> cab<br> cabin<br> camera<br> campground<br> camping<br> car<br> carry-on<br> chart<br> coast<br> cruise<br> cruise ship<br> currency<br> customs<br> depart<br> departure<br> destination<br> downtime<br> drive<br> embark<br> excursion<br> expedition<br> explore<br> ferry<br> flew<br> flight<br> fly<br> foreign<br> foreigner<br> garment bag<br> getaway<br> go<br> guide<br> guided tour<br> hiatus<br> highway<br> hike<br> holiday<br> hostel<br> hotel<br> inn<br> island<br> itinerary<br> jet<br> journey<br> keepsake<br> knapsack<br> lake<br> landing<br> leave<br> leisure<br> lodge<br> lodging<br> luggage<br> map<br> motel<br> mountains<br> museum<br> national park<br> ocean liner<br> outdoors<br> overnight bag<br> pack<br> passage<br> passport<br> photos<br> photographs<br> pictures<br> plane<br> port<br> postcard<br> recreation<br> red-eye<br> relax<br> relaxation<br> reservations<br> resort<br> rest<br> restaurant<br> return<br> room<br> sack<br> safari<br> sail<br> scenery<br> schedule<br> sea<br> seashore<br> ship<br> shore<br> sights<br> sight-seeing<br> ski lodge<br> souvenir<br> stand-by<br> state park<br> station<br> stay<br> subway<br> suitcase<br> sunscreen<br> swim<br> swimsuit<br> takeoff<br> taxi<br> tent<br> ticket<br> tip<br> tote<br> tour<br> tour bus<br> tour guide<br> tourist<br> tourist trap<br> trail<br> train<br> train station<br> tram<br> tramway<br> translate<br> transportation<br> travel<br> travel agent<br> travel bag<br> trip<br> trunk<br> umbrella<br> unpack<br> vacation<br> vehicle<br> video<br> video camera<br> visa<br> visit<br> voyage<br> walk<br> wander<br> waterfall<br> waterpark<br> weekend<br> yacht<br> zoo".split('<br> ')
		};

		return output;
	}
};