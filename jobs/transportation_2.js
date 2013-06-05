// transportation_2.js
module.exports = {
	title: 'Transportation Words',
	full: 'transportation',
	language: 'english',
	type: 'U',
	topic: 'TR',
	url: 'http://www.enchantedlearning.com/wordlist/driving.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "accelerate<br> accelerator<br> accident<br> airbag<br> alley<br> arterial road<br> asphalt<br> auto<br> automatic transmission<br> automobile<br> avenue<br> back-up<br> back seat<br> back seat driver<br> barrier<br> bicycle<br> bike<br> boulevard<br> brakes<br> bridge<br> bus<br> car<br> carpool<br> carpool lane<br> causeway<br> caution<br> chauffeur<br> circle<br> cloverleaf<br> clutch<br> cobblestone<br> construction<br> court<br> crash<br> cruise control<br> cul-de-sac<br> curve<br> danger<br> dead end<br> defensive driving<br> dent<br> detour<br> diamond lane<br> dirt road<br> do not enter sign<br> double parked<br> drive<br> driver<br> driver's ed<br> driver's education<br> driver's license<br> driveway<br> electric car<br> emergency<br> emission<br> entrance ramp<br> exhaust<br> exit<br> exit ramp<br> expressway<br> fast<br> fast lane<br> fender<br> fill it up<br> flat-bed truck<br> flat tire<br> freeway<br> fuel<br> fuel efficiency<br> fuel tank<br> garage<br> gas<br> gasoline<br> gas tank<br> gear<br> gearshift<br> global positioning system<br> go<br> gps<br> gravel road<br> green light<br> gridlock<br> gutter<br> hairpin curve<br> headlights<br> high-beam<br> high-occupancy vehicle lane<br> high-octane gas<br> highway<br> highway patrol<br> hill<br> hov lane<br> hybrid<br> idling<br> impact<br> indicator<br> insurance<br> interchange<br> intersection<br> interstate highway<br> jackknifing<br> kilometer<br> kilometers per hour<br> kph<br> lane<br> learner's permit<br> left turn<br> license<br> lights<br> loop<br> low-beam<br> manual transmission<br> map<br> mass transit<br> merge<br> mile<br> mile marker<br> miles per gallon<br> miles per hour<br> motor<br> motorcycle<br> motorway<br> mph<br> no parking<br> no stopping<br> oil<br> oncoming traffic<br> one-way<br> overpass<br> parallel parking<br> park<br> parking lot<br> parking meter<br> parking spot<br> parking ticket<br> parkway<br> pass<br> pavement<br> pedal<br> pedestrian<br> pedestrian crossing<br> police<br> pot hole<br> railroad crossing<br> ramp<br> red light<br> registration<br> rest area<br> rest stop<br> reverse<br> ride<br> right turn<br> road<br> road closed<br> road crew<br> road rage<br> road trip<br> roadway<br> rollover<br> roundabout<br> rush hour<br> safety<br> scenery<br> scenic route<br> school zone<br> s-curve<br> seatbelt<br> semi<br> shoulder<br> sidewalk<br> sign<br> skid<br> slow<br> snow plow<br> speed<br> speed bump<br> speed limit<br> speeding<br> speeding ticket<br> speedometer<br> state patrol<br> steer<br> steering wheel<br> stop<br> stop sign<br> street<br> street sign<br> superhighway<br> suv<br> switchbacks<br> terrace<br> test drive<br> ticket<br> tire<br> toll<br> toll road<br> tow truck<br> traffic<br> traffic jam<br> traffic light<br> traffic sign<br> transmission<br> transportation<br> truck<br> truck route<br> truck stop<br> tunnel<br> turn<br> turn signal<br> under construction<br> underpass<br> u-turn<br> van pool<br> vehicle<br> warning<br> wide load<br> yellow light<br> yield<br> zebra crossing".split('<br> ')
		};

		return output;
	}
};