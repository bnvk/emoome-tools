// transportation_4.js
module.exports = {
	title: 'Transportation Words',
	full: 'transportation',
	language: 'english',
	type: 'D',
	topic: 'TR',
	url: 'http://www.enchantedlearning.com/wordlist/carparts.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "accelerator<br> airbag<br> air conditioner<br> air conditioning<br> air filter<br> air vent<br> alarm<br> all-wheel drive<br> alternator<br> antenna<br> anti-lock brakes<br> armrest<br> auto<br> automatic transmission<br> automobile<br> axle<br> baby car seat<br> baby seat<br> back-up lights<br> battery<br> bench seat<br> bonnet<br> brake light<br> brake pedal<br> brakes<br> bucket seat<br> bumper<br> camshaft<br> car<br> carburetor<br> catalytic converter<br> chassis<br> child car seat<br> chrome trim<br> clutch<br> computer<br> console<br> cooling system<br> crankshaft<br> cruise control<br> cylinder<br> dashboard<br> defroster<br> diesel engine<br> dip stick<br> differential<br> door<br> door handle<br> drive belt<br> drive shaft<br> driver's seat<br> emergency brake<br> emergency lights<br> emissions<br> engine<br> engine block<br> exhaust pipe<br> exhaust system<br> fan belt<br> fender<br> filter<br> floor mat<br> fog light<br> four-wheel drive<br> frame<br> fuel<br> fuel cap<br> fuel gauge<br> fuse<br> gas<br> gasket<br> gas pedal<br> gas gauge<br> gasoline<br> gas tank<br> gauge<br> gearbox<br> gear shift<br> gear stick<br> glove compartment<br> gps<br> grille<br> hand brake<br> headlamp<br> headlight<br> headrest<br> heater<br> high-beam headlights<br> hood<br> horn<br> hubcap<br> hybrid<br> ignition<br> instrument panel<br> interior light<br> internal combustion engine<br> jack<br> key<br> license plate<br> lights<br> lock<br> low-beam headlights<br> lug bolt<br> lug nut<br> manifold<br> manual transmission<br> mat<br> mirror<br> moon roof<br> motor<br> mud flap<br> muffler<br> navigation system<br> odometer<br> oil<br> oil filter<br> oil tank<br> parking brake<br> parking lights<br> passenger seat<br> pedal<br> piston<br> power brakes<br> power steering<br> power window switch<br> radiator<br> radio<br> rag top<br> rear-view mirror<br> rear window defroster<br> reverse light<br> rims<br> roof<br> roof rack<br> rotary engine<br> seat<br> seat belt<br> shift<br> shock absorber<br> side airbags<br> side mirror<br> spare tire<br> spark plug<br> speaker<br> speedometer<br> spoiler<br> starter<br> steering column<br> steering wheel<br> sunroof<br> sun visor<br> suspension<br> tachometer<br> tailgate<br> temperature gauge<br> thermometer<br> tire<br> trailer hitch<br> transmission<br> trim<br> trip computer<br> trunk<br> turbo charger<br> turn signal<br> undercarriage<br> unleaded gas<br> valve<br> vents<br> visor<br> warning light<br> wheel<br> wheel well<br> window<br> windshield<br> windshield wiper".split('<br> ')
		};

		return output;
	}
};