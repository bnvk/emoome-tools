// philosophy_1.js
module.exports = {
	title: 'Philosophy Words',
	full: 'philosophy',
	language: 'english',
	type: 'I',
	topic: 'PH',
	url: 'http://thesaurus.com/browse/philosophy',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "aesthetics, attitude, axiom, beliefs, conception, convictions, doctrine, idea, ideology, logic, metaphysics, ontology, outlook, rationalism, reason, reasoning, system, tenet, theory, thinking, thought, truth, values, view, viewpoint, wisdom, air, angle, approach, belief, bent, bias, character, demeanor, disposition, frame of mind, headset, inclination, leaning, mental state, mindset, mindtrip, mood, notion, opinion, perspective, philosophy, point of view, position, posture, predilection, prejudice, proclivity, reaction, routine, say so, sensibility, sentiment, slant, stance, stand, standing, standpoint, temper, temperament, twist, view, antecedent, apriority, assignment, assumption, attribution, axiom, basis, belief, conclusion, condition, conjecture, data, deduction, demonstration, derivation, explanation, foundation, ground, guess, inference, interpretation, layout, lemma, philosophy, plan, position, postulate, premise, presupposition, principle, proposal, proposition, rationale, reason, scheme, shot in the dark, speculation, starting point, suggestion, supposition, surmise, system, tentative law, term, theorem, thesis".split(', ')
		};

		return output;
	}
};