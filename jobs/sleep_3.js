// sleep_3.js
module.exports = {
	title: 'Sleep Words',
	full: 'sleep',
	language: 'english',
	type: 'P',
	topic: 'SL',
	url: 'http://www.merriam-webster.com/thesaurus/sleepy',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "dozy, drowsy, slumberous, slumbrous, somnolent, asleep, dormant, dozing, resting, sleeping, slumbering, nodding, yawning, restive, restless, sleepless, insomniac, alert, awake, conscious, wakeful, wide-awake, dull, inert, lethargic, quiescent, sleepy, sluggish, torpid, ambitionless, apathetic, indolent, languorous, lazy, lazyish, listless, shiftless, slack, slothful, sluggard, sluggardly, dormant, resting, sedentary, dopey,  dopy, drugged, asleep, drowsy, somnambulant, catatonic, comatose, anesthetic, anesthetizing, benumbing, deadening, dulling, numbing, hypnotizing, mesmerizing, stupefying, arousing, awakening, energizing, invigorating, rousing, stimulating, wakening, waking, bracing, refreshing, restorative, reviving, stimulative, stimulatory, lethargic, sluggish, torpid, dormant, idle, inactive, vacant".split(', ')
		};

		return output;
	}
};