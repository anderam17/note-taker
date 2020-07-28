//require express
var express = require("express");

//set properties of express server
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//points server to files in the routes folder
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

//set server to listen
app.listen(PORT, function(){
    console.log(`App is listening on Port: ${PORT}`);
});





