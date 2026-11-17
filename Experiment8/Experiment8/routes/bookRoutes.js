const express = require('express');
const router = express.Router();
const books = require('../data/books');

// GET: Get all books
router.get('/', (req, res) => {
    res.json(books);
});

// GET: Get one book by ID
router.get('/:id', (req, res) => {
    const book = books.find(b => b.id === Number(req.params.id));

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
});

// POST: Add a new book
router.post('/', (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            message: 'Please provide both title and author'
        });
    }

    const newId = books.length
        ? Math.max(...books.map(book => book.id)) + 1
        : 1;

    const newBook = {
        id: newId,
        title: title,
        author: author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT: Update a book
router.put('/:id', (req, res) => {
    const book = books.find(b => b.id === Number(req.params.id));

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            message: 'Please provide both title and author'
        });
    }

    book.title = title;
    book.author = author;

    res.json(book);
});

// DELETE: Delete a book
router.delete('/:id', (req, res) => {
    const index = books.findIndex(b => b.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    books.splice(index, 1);
    res.json({ message: 'Book deleted successfully' });
});

module.exports = router;
