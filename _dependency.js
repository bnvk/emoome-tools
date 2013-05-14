// App.js
module.exports = function App() {
};

// Database.js
module.exports = function Database(configuration) {
};

// Routes.js
module.exports = function Routes(app, database) {
};

// server.js: composition root
var App = require("./App");
var Database = require("./Database");
var Routes = require("./Routes");
var dbConfig = require("./dbconfig.json");

var app = new App();
var database = new Database(dbConfig);
var routes = new Routes(app, database);