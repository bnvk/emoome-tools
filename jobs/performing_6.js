// performing_6.js
module.exports = {
	title: 'Performing Words',
	full: 'performing',
	language: 'english',
	type: 'P',
	topic: 'PR',
	url: 'http://thesaurus.com/browse/dance',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "Charleston, bob, boogie, boogie down, bunny hop, caper, careen, cavort, conga, cut a rug, disco, flit, foot it, foxtrot, frolic, gambol, get down, hoof it, hop, hustle, jig, jitter, jitterbug, jive, jump, leap, one-step, prance, promenade, rhumba, rock, rock n' roll, samba, shimmy, skip, spin, step, strut, sway, swing, tango, tap, tread, trip, trip the light fantastic, twist, two-step, waltz, whirl".split(', ')
		};

		return output;
	}
};