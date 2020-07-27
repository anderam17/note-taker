//
var express = require("express");

//set properties of express server
var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//points server to files in the routes folder
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log(`App is listening on Port: ${PORT}`);
});

// Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.




