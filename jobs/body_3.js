// body_2.js
module.exports = {
	title: 'Body Words',
	full: 'body',
	language: 'english',
	type: 'P',
	topic: 'B',
	url: 'http://www.buzzle.com/articles/body-parts-list.html',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "Adrenals, Appendix, Bladder, Brain, Esophagus, Eyes, Gallbladder, Heart, Intestines, Kidney, Liver, Lung, Ovaries, Pancreas, Parathyroids, Pituitary, Prostate, Spleen, Stomach, Testicles, Thymus, Thyroid, Uterus, Veins, Head, Forehead, Jaw, Cheek, Chin, Eye, Ear, Nose, Mouth, Teeth, Tongue, Throat, Neck, Adams apple, Shoulders, Arm, Elbow, Wrist, Hand, Fingers, Thumb, Spine, Chest, Thorax, Breast, Abdomen, Groin, Hip, Buttocks, Navel, Penis, Scrotum, Clitoris, Vulva, Leg, Thigh, Knee, Calf, Heel, Ankle, Foot, Toes".split(', ')
		};

		return output;
	}
};