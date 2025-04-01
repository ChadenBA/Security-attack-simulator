const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to simulate some processing time
app.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, 100); // Simulate processing delay (100ms)
});

// A simple endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the vulnerable server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
