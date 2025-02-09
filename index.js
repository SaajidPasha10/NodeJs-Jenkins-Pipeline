const express = require('express');
const app = express();
const port = 3000;

// Simple route to test the app
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// API route to test
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
