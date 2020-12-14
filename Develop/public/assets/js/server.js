// dependencies
const express = require('express');
const path = require ('path');

// app
const app = express();
const PORT = 3000;

const handleRequest = (request, response) => {
    response.end(
      'To err is human, but to really foul things up you need a computer.'
    );
  };

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', function (req, res) {
//     ...
// });

const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
  