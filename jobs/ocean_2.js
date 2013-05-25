// ocean_2.js
module.exports = {
	title: 'Ocean Words',
	full: 'ocean',
	language: 'english',
	type: 'S',
	topic: 'O',
	url: 'http://www.enchantedlearning.com/wordlist/beach.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "barnacle<br> bathing suit<br> bay<br> beach<br> beachball<br> bikini<br> boardwalk<br> boat<br> boogie board<br> cape<br> catamaran<br> clam<br> clam bake<br> coast<br> conch<br> cooler<br> coral<br> cove<br> crab<br> currents<br> dive<br> dock<br> dune<br> dune buggy<br> ebb tide<br> fins<br> fish<br> fishing<br> frisbee<br> gull<br> hang five<br> hang ten<br> hermit crab<br> high tide<br> ice cream<br> intertidal zone<br> island<br> jellyfish<br> kayak<br> kelp<br> lagoon<br> lake<br> lakeshore<br> lifeguard<br> life jacket<br> life preserver<br> limpet<br> longboard<br> low tide<br> mangrove<br> mussels<br> neap tide<br> ocean<br> paddleboat<br> palm tree<br> pelican<br> pier<br> popsicle<br> reef<br> relax<br> rest<br> rip current<br> sail<br> sailboat<br> salt water<br> salt water taffy<br> sand<br> sandals<br> sandbar<br> sandcastle<br> sand dollar<br> scuba<br> sea<br> seagull<br> seashell<br> seashore<br> sea star<br> shark<br> shell<br> ship<br> shore<br> shorebirds<br> snacks<br> snorkel<br> soft serve ice cream<br> spray<br> starfish<br> sunbathe<br> surf<br> surfboard<br> swim<br> swim fins<br> swimming cap<br> tide<br> tide pool<br> towel<br> trip<br> trunks<br> tsunami<br> umbrella<br> undertow<br> underwater<br> vacation<br> water<br> water bottle<br> waves<br> weekend<br> wet<br> wharf<br> whitecaps<br> yacht<br> zoris".split('<br> ')
		};

		return output;
	}
};