// touch_1.js
module.exports = {
	title: 'Touch Words',
	full: 'touch',
	language: 'english',
	type: 'P',
	topic: 'TO',
	url: 'http://thesaurus.com/browse/touch',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "blow, brush, caress, collision, communication, contact, contingence, crash, cuddling, embrace, feel, feeling, fondling, graze, grope, handling, hit, hug, impact, junction, kiss, lick, manipulation, nudge, palpation, pat, peck, perception, percussion, petting, push, rub, rubbing, scratch, shock, stroke, stroking, tactility, taction, tap, taste, touching, abut, adjoin, be in contact, border, brush, butt on, caress, come together, communicate, contact, converge, dab, examine, feel, feel up, finger, fondle, frisk, glance, graze, grope, handle, hit, impinge upon, inspect, join, kiss, lay a finger on, lick, line, manipulate, march, massage, meet, neighbor, osculate, palm, palpate, partake, pat, paw, percuss, pet, probe, push, reach, rub, scrutinize, sip, smooth, strike, stroke, suck, sweep, tag, tap, taste, thumb, tickle, tip, toy, verge, tactile, touch, touching, somaesthesis, somataesthesis, somatic sense, somatic sensory system, somesthesis, somaesthesia, somesthesia, somatesthesia, cutaneous, cutaneous senses, sense of touch, skin senses, touch modality, proprioception, tactility, touch perception, tactual sensation, kinaesthesia, kinesthesia".split(', ')
		};

		return output;
	}
};