// save_file.js
module.exports = function SaveFile(fs, filename, data) {

	// JSON it
	var json_data = JSON.stringify(data);

	// Write it
	fs.writeFile(filename, json_data, function (err) {

		if (err) return console.log(err);
		console.log('Created or Updated JSON file');
	});
};