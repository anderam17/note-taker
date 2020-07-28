//requiring necessary node packages
var fs = require("fs");
const shortid = require('shortid');

//exporting route functionality so that fron tend has access through the server
module.exports = function(app){
    //responds to user request with JSON data
    app.get("/api/notes", function(req, res){
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            if (err){
                console.log(err);
            } else {
                res.json(JSON.parse(data));
            }
        })
    });

    //responds to user request by adding note to the data
    app.post("/api/notes", function(req, res){
        //generate unique ID each time a new set of data is generated
        req.body.id = shortid.generate();

        //request data is pushed into existing data
        fs.readFile("./db/db.json", "utf8", (err, data) => {
           var notes = JSON.parse(data);
           notes.push(req.body);

           //uptaded notes file is written into db.json file
           fs.writeFile("./db/db.json", JSON.stringify(notes, null, 4), function(err){
               if (err){
                   console.log(err);
               } else {
                   res.json(req.body);
               }
           });
        })

    });

    //data object is found by unique id and deleted
    app.delete("/api/notes/:id", function(req, res){
        //id of data is acquired
        let id = req.params.id;
        
        fs.readFile("./db/db.json", "utf8", (err, data) => {
            data = JSON.parse(data);
            //data is filtered so that all data points without requested id are returned 
            data = data.filter(note => note.id !== id);
            //file is written again using the data that excludes the object with the requested ID
            fs.writeFile("./db/db.json", JSON.stringify(data, null, 4), function(err){
                if (err){
                    console.log(err);
                } else {
                    res.json({});
                }
            });
        });
    });
}
