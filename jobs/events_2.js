// events_2.js
module.exports = {
	title: 'Events Words',
	full: 'events',
	language: 'english',
	type: 'D',
	topic: 'EV',
	url: 'https://brennannovak.com',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "January, Jan, February, Feb, March, Mar, Aril, Apr, May, May, June, Jun, July, Jul, August, Aug, September, Sep, October, Oct, November, Nov, December, Dec, sunday, sun, monday, mon, tuesday, tue, wednesday, wed, thursday, thurs, friday, fri, saturday, sat, tomorrow, today, yesterday, day, crack of dawn, dawn, morning, morn, mornin, noon, midday, mid-day, afternoon, evening, eve, night, late night, midnight, birthday, holiday, anniversary, vacation".split(', ')
		};

		return output;
	}
};