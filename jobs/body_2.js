// body_2.js
module.exports = {
	title: 'Body Words',
	full: 'body',
	language: 'english',
	type: 'P',
	topic: 'B',
	url: 'http://www.alternet.org/story/586/durst%3A_top_100_human_body_parts',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "Soul Heart Gut. Pigment. Female reproductive organ. Male reproductive organ. Thumbs. Spine. Eyes. Placenta. Thighs. Ears. Female nipples. Teeth. Washboard abs. Hands. Bowels. Tongue. Feet. Artificially augmented mammary glands. Nose. Liver. Mouth. Hair. Middle finger. Muscles. Knees. Shoulders. Skull. Kidneys. Taste buds. Pituitary gland. Sinuses. Elbows. Shins. Forearms. Neck. Fontanelle. Temple. Spleen. Intestines. Brain. Calves. Larynx. Lungs. Ribs. Forefinger. Collarbone. Coccyx. Buns of steel. Heel. Big toe. Stomach. Upper palate. Chin. Hips. Nostrils. Groin. Male reproductive organs Cheeks upper. Urethra Epidermis. Arches. Fingernails. Lips. Clavicle. Back of knees. Cheeks lower. Fallopian tube. Ring finger. Mandible. Forehead. Pelvis. Eyebrows. Pancreas. Freckles. Vertebrae. Trachea. Inside of elbows. Wrists. Gums. Achilles heels. Veins. Eyelids. Capillaries. Eyelashes. Knuckles. Belly. Anterior cruciate ligament. Funny bone. Sideburns. Palms. Toenails. Prostate. Duodenum. Groove between nose and upper lip. Tonsils. Appendix. Armpits. Male nipples".split('. ')
		};

		return output;
	}
};