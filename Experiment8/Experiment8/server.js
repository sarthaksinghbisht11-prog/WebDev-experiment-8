const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

// Middleware to read JSON request bodies
app.use(express.json());

// Book API routes
app.use('/books', bookRoutes);

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Book Management API');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
