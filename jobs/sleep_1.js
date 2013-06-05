// sleep_1.js
module.exports = {
	title: 'Sleep Words',
	full: 'sleep',
	language: 'english',
	type: 'P',
	topic: 'SL',
	url: 'http://thesaurus.com/browse/sleep',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "bedtime, catnap, coma, dormancy, doze, dream, dullness, few zs, forty winks, hibernation, lethargy, nap, nod, repose, rest, sack time, sandman, shuteye, siesta, slumber, slumberland, snooze, torpidity, torpor, trance, awakening, consciousness, wakefulness, blackout, dullness, faint, hebetude, insensibility, lethargy, oblivion, sleep, slumber, somnolence, stupor, swoon, syncope, torpidity, torpor, trance, alertness, consciousness, wakefulness, coma, apnea, sleep apnea, sleep, sleepy, tired".split(', ')
		};

		return output;
	}
};