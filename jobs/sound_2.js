// sound_2.js
module.exports = {
	title: 'Sound Words',
	full: 'sound',
	language: 'english',
	type: 'S',
	topic: 'SN',
	url: 'http://thesaurus.com/browse/sound',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "accent, din, harmony, intonation, loudness, melody, modulation, music, noise, note, pitch, racket, report, resonance, reverberation, ringing, softness, sonance, sonancy, sonority, sonorousness, static, tenor, tonality, tone, vibration, voice, silence, babble, bang, bark, blare, blow, boom, burst, buzz, cackle, chatter, clack, clang, clank, clap, clatter, clink, crash, creak, detonate, echo, emit, explode, hum, jabber, jangle, jar, moan, murmur, patter, play, rattle, reflect, resonate, resound, reverberate, ring, roar, rumble, shout, shriek, shrill, sing, slam, smash, snort, squawk, thud, thump, thunder, toot, trumpet, vibrate, whine, whisper, acoustic, altitonant, amphorous, anechoic, assonant, audible, audio, auditory, aural, auricular, borborygmic, buccinal, cacuminal, closed, deaf, distinct, dumb, faint, foudroyant, glad, inaudible, isacoustic, loud, monophonic, mum, mute, noisy, non, quadraphonic, quiet, rataplan, raucous, reel, rooped, roupy, singultous, soft, sonant, sonic, soniferous, sonorific, sonorous, sounding, soundproof, stereophonic, stertorous, still, stone, supersonic, throaty, tone, sound, noise, strain, accent, twang, intonation, tone, cadence, sonorousness, audibility, resonance, voice, aspirate, ideophone, rough breathing, acoustics, phonics, phonetics, phonology, phonography, diacoustics, diaphonics, phonetism".split(', ')
		};

		return output;
	}
};