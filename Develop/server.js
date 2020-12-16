// dependencies
const { json } = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require ('path');

// app
const app = express();
const PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// notes array
let notes = [];

// html routes 
  app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
  app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
  let data = JSON.parse(fs.readFileSync('./db/db.json', "utf8"))
  app.get('/api/notes', (req, res) => {
    return res.json(data)
  });

// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, 
// and then return the new note to the client. You'll need to find a way to give each note a unique id 
// when it's saved (look into `npm` packages that could do this for you).

  app.post('/api/notes', (req, res) => {
    const addNote = req.body; 
    notes.push(addNote);
    fs.writeFile(path.join(__dirname,'./db/db.json'), JSON.stringify(notes));
    res.json(addNote);
  });


// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`App listening on: http://localhost:${PORT}`);
  });

