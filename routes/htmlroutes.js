//require node path package
var path = require("path");

//export route functionality so froont end has access through the server
module.exports = function(app){
    //sends notes html when requested with/notes path
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../notes.html"));
    });

    // the following two paths make sure the css and js travel as you click through the website
    app.get("/assets/js/index.js", function(req, res){
        res.sendFile(path.join(__dirname, "../assets/js/index.js"));
    });

    app.get("/assets/css/styles.css", function(req, res){
        res.sendFile(path.join(__dirname, "../assets/css/styles.css"));
    });

    //catch all that returns you to the home screen
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../index.html"));
    });
}