// Modules
var request = require("request"),
	cheerio = require("cheerio"),
	fs = require("fs"),
	_ = require('underscore');
	

var fileName = 'test.json';
var format = 'json';
var new_word = process.argv[2];


var saveFile = function(data) {
	
	// JSON it
	var json_data = JSON.stringify(data);

	// Write it
	fs.writeFile(fileName, json_data, function (err) {

		if (err) return console.log(err);
		console.log('Created JSON file');
	});	

}


var updateFile = function(data) {
	
	var check_word = _.indexOf(data.words, new_word);
	
	if (check_word === -1) {          
		      
		data.words.push(new_word);
		
		saveFile(data);
	}
}
	

var openFile = function(data) {
    fs.stat(fileName, function(error, stats) {
      fs.open(fileName, "r", function(error, fd) {  
        var buffer = new Buffer(stats.size);        
        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
          var data = buffer.toString("utf8", 0, buffer.length),
          data = JSON.parse(data);
          if (data.words) {
	          console.log('File is opened, here is the data');
	          console.log(data.words);
	      	  updateFile(data);
      	  }
      	  else {
	      	  console.log('For some reason the words Array does not exist');
      	  }
          fs.close(fd);
        });
      });
    });
}


	
var checkFile = function(data) {

	// Attempt to load file
	fs.exists(fileName, function(exists) {	
		// Does file exist
		if (exists) {	
			console.log('Yay file exists, open it up');
			openFile(data);		  
		}
		else {
			console.log('Oopsies daisy file is empty, creating new one');
			saveFile(data);
		}
	});
}


// Run the thingy
var test_data = {
	title: "Some wicked sweet test data",
	words: ["some","data","to","test","with"]
};


checkFile(test_data);
