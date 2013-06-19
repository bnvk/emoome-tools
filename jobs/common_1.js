// common_1.js
module.exports = {
	title: 'Common Words',
	full: 'common',
	language: 'english',
	type: 'D',
	topic: 'C',
	url: 'alphabet',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(',')
		};

		return output;
	}
};