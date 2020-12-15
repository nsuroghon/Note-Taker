// dependencies
const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser');

// app
const app = express();
const PORT = 3000;
// const http = require('http');
// const { response } = require('express');

// const handleRequest = (request, response) => {
//     response.end(
//       'To err is human, but to really foul things up you need a computer.'
//     );
//   };

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', function (req, res) {
//     res.end('Hello World')
// });

//opens to index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));


// const server = http.createServer();

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
