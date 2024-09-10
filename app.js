// app.js

const express = require('express');
const app = express();

// Define a port
const port = 4000;

// Define a simple route
app.get('/123', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
