const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000; // Change this to your desired port number

let movieData; // To store the parsed JSON data

// Read the JSON file once on server startup
fs.readFile('movies.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  movieData = JSON.parse(data);
  console.log('JSON file loaded successfully');
});

// Define a route to handle the GET requests with start and stop parameters
app.get('/getMovies', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  const { start, stop } = req.query;

  if (!start || !stop) {
    return res.status(400).send('Both start and stop parameters are required');
  }

  const startIndex = parseInt(start, 10);
  const stopIndex = parseInt(stop, 10);

  if (isNaN(startIndex) || isNaN(stopIndex)) {
    return res.status(400).send('Invalid start or stop parameters');
  }

  const moviesSlice = stopIndex == -1 ? movieData.movies.slice(startIndex) : movieData.movies.slice(startIndex, stopIndex + 1);

  res.json({ movies: moviesSlice });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});