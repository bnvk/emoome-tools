// medicine_4.js
module.exports = {
	title: 'Medicine Words',
	full: 'medicine',
	language: 'english',
	type: 'P',
	topic: 'MD',
	url: 'http://www.enchantedlearning.com/wordlist/doctor.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "ambulance<br> antibiotic<br> appointment<br> biopsy<br> bandage<br> cast<br> clinic<br> culture<br> dentist<br> dental<br> dentures<br> diagnose<br> diagnosis<br> doctor<br> dose<br> dosage<br> dose<br> drug<br> emergency room<br> exam<br> examination<br> eye test<br> filling<br> first aid<br> hearing test<br> hygienist<br> hypodermic needle<br> inoculation<br> intensive care<br> laparoscope<br> medic<br> medical<br> medication<br> medicine<br> needle<br> nurse<br> operate<br> operation<br> opthalmologist<br> optometrist<br> orderly<br> pediatrician<br> physician<br> pill<br> placebo<br> poison<br> practitioner<br> prescription<br> procedure<br> quarantine<br> scalpel<br> scan<br> second opinion<br> sling<br> specialist<br> sterilized<br> stitches<br> stretcher<br> surgery<br> test<br> therapy<br> therapeutic<br> transfusion<br> treat<br> treatment<br> tweezers<br> ultrasound<br> vaccination<br> vaccine<br> vector<br> x-ray".split('<br> ')
		};

		return output;
	}
};