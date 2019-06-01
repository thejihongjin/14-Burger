var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static("public")); // serve static content for the app from the "public" directory in the application directory
app.use(express.urlencoded({ extended: true })); // parse application body as JSON
app.use(express.json());

var exphbs = require("express-handlebars"); // set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js"); // import routes and give the server access to them
app.use(routes);

app.listen(PORT, function () { // start our server so that it can begin listening to client requests
    console.log("Server listening on: http://localhost:" + PORT); // log (server-side) when our server has started
});