// intelligence_2.js
module.exports = {
	title: 'Intelligence Words',
	full: 'intelligence',
	language: 'english',
	type: 'I',
	topic: 'I',
	url: 'http://thesaurus.com/browse/stupid',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "brains, brainpower, gray matter, headpiece, intellect, intellectuality, mentality, reason, sense, smarts, eggheadedness, highbrowism, intellectualism, braininess, brilliance, acumen, alertness, apprehension, astuteness, discernment, discriminability, insight, judgment, judgement, perception, percipience, perspicacity, common sense, horse sense, mother wit, aptitude, precocity, precocious, talent, sagacity, sapience, wisdom, wit, head, mind, skull, denseness, density, doltishness, dopiness, dullness, dulness, dumbness, fatuity, feeblemindedness, foolishness, half-wittedness, idiocy, imbecility, senselessness, simpleness, slowness, stupidity, silly, idiotic, extremely, unintelligent, not intelligent, simple-minded, slow-witted, slow, not intelligent, brainless, extremely stupid, thick, stupid, empty-headed, not sensible, stupid, brainless, dazed, deficient, dense, dim, doltish, dopey, dull, dumb, dummy, foolish, futile, gullible, half-baked, half-witted, idiotic, ill-advised, imbecilic, inane, indiscreet, insensate, irrelevant, laughable, loser*, ludicrous, meaningless, mindless, moronic, naive, nonsensical, obtuse, out to lunch, pointless, puerile, rash, senseless, shortsighted, simple, simpleminded, slow, sluggish, stolid, stupefied, thick, thick-headed, trivial, unintelligent, unthinking, witless, absurd, cretinous, daft, foolish, half-witted, idiotic, inane, moronic, silly, sophomoric, stupid, arrested, behind, checked, delayed, dense, dull, feeble-minded, imbecile, late, moronic, stupid, subnormal, underdeveloped, underprivileged, undeveloped".split(', ')
		};

		return output;
	}
};