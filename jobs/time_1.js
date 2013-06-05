// time_1.js
module.exports = {
	title: 'Time Words',
	full: 'time',
	language: 'english',
	type: 'I',
	topic: 'TI',
	url: 'http://www.enchantedlearning.com/wordlist/time.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "after<br> afternoon<br> afterwards<br> alarm clock<br> am<br> analog clock<br> annual<br> ante meridian<br> anytime<br> bedtime<br> before<br> before hand<br> belated<br> bell<br> biennial<br> bicentennial<br> calendar<br> calendar year<br> century<br> chronological<br> chronology<br> chronometer<br> clock<br> clock face<br> coordinated universal time<br> cuckoo clock<br> day<br> daylight<br> daylight savings time<br> daytime<br> days of the week<br> decade<br> decennium<br> delay<br> delayed<br> dial<br> digital clock<br> dst<br> early<br> eon<br> epoch<br> era<br> evening<br> everyday<br> face<br> fiscal year<br> fortnight<br> future<br> galactic year<br> geologic time<br> gnomon<br> grandfather clock<br> greenwich mean time<br> half-life<br> hands<br> high noon<br> horology<br> hour<br> hourglass<br> hour hand<br> idl<br> international date line<br> jiffy<br> jubilee<br> late<br> later<br> leap second<br> leap year<br> lunar month<br> meridian<br> microsecond<br> midafternoon<br> midnight<br> midmorning<br> millennium<br> millisecond<br> minute<br> minute hand<br> moment<br> momentarily<br> month<br> morning<br> nanosecond<br> night<br> nighttime<br> noon<br> now<br> o'clock<br> on time<br> overtime<br> past<br> pendulum clock<br> per annum<br> per diem<br> period<br> picosecond<br> pm<br> pocket watch<br> post meridian<br> premature<br> present<br> prime meridian<br> punctual<br> quarter hour<br> quartz clock<br> quaver<br> schedule<br> season<br> second<br> second hand<br> semester<br> semiquaver<br> shift<br> sidereal time<br> someday<br> sometime<br> soon<br> stopwatch<br> sundial<br> sunrise<br> sunset<br> synchronized<br> tardy<br> tempo<br> then<br> time<br> timekeeper<br> timepiece<br> timer<br> timetable<br> time zone<br> tonight<br> today<br> tomorrow<br> triennium<br> trimester<br> twilight<br> utc<br> watch<br> water clock<br> week<br> wristwatch<br> year<br> yesterday<br> yesteryear<br> zone<br> zulu time".split('<br> ')
		};

		return output;
	}
};