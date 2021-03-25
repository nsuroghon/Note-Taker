// dependencies
const express = require('express');

// const { json } = require('body-parser');
const fs = require('fs');
const path = require ('path');

// app
const app = express();
var PORT = process.env.PORT || 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// html routes 
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));


let notes = JSON.parse(fs.readFileSync('./db/db.json', "utf8"))

  app.get('/api/notes', (req, res) => {
    return res.json(notes)
  });

  app.post('/api/notes', (req, res) => {
    const addNote = req.body; 
    notes.push(addNote);
    assignID();
    
    fs.writeFile(path.join(__dirname, "db/db.json"), JSON.stringify(notes), (err) => {

      (err) ? console.error(err): res.json(notes);
  })
  });

  const assignID = () => {
    for (i = 0; i < notes.length; i++) {
        notes[i].id = i + 1;
        // console.log(notes[i])
    }
};

app.delete('/api/notes/:id', function(req, res) {

  notes = notes.filter(x => x.id != req.params.id)

  fs.writeFile(path.join(__dirname, "db/db.json"), JSON.stringify(notes), (err) => {

      (err) ? console.error(err): res.json(notes);
  });

});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`App listening on: http://localhost:${PORT}`);
  });

