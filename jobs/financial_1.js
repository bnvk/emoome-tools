// art_1.js
module.exports = {
	title: 'Finance Words',
	full: 'financial',
	language: 'english',
	type: 'U',
	topic: 'FI',
	url: 'http://www.enchantedlearning.com/wordlist/money.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "afford<br> ATM<br> auction<br> bailout<br> balance<br> bank<br> bankrupt<br> bankruptcy<br> bargain<br> bill<br> bonds<br> borrow<br> bought<br> budget<br> business<br> buy<br> capital<br> cash<br> cent<br> change<br> cheap<br> check<br> collateral<br> commodity<br> compound<br> coupon<br> credit<br> credit card<br> currency<br> debt<br> defecit<br> deposit<br> depression<br> dime<br> discount<br> diversify<br> dividend<br> dollar<br> donate<br> donation<br> donor<br> down payment<br> earn<br> earnings<br> economy<br> economics<br> economist<br> equity<br> estate<br> Euro<br> exchange<br> expense<br> expensive<br> finance<br> financier<br> fund<br> income<br> interest<br> invest<br> investment<br> investor<br> lend<br> lender<br> loan<br> loss<br> margin<br> market<br> money<br> mortgage<br> nickel<br> note<br> outgo<br> overdrawn<br> pay<br> payment<br> pence<br> penny<br> percentage<br> poor<br> portfolio<br> Pound<br> profit<br> purse<br> quarter<br> rate<br> rebate<br> receipt<br> recession<br> rent<br> reserve<br> rich<br> risk<br> sale<br> save<br> savings<br> security<br> sell<br> seller<br> sold<br> spend<br> stocks<br> surplus<br> swap<br> tax<br> teller<br> thrifty<br> trade<br> treasury<br> value<br> vault<br> wallet<br> wealth<br> withdraw<br> yield<br>".split('<br> ')
		};

		return output;
	}
};