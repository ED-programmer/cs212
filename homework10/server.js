// import the module from express
const express = require('express');

// create/store the express application needed
const app = express();

// need to create the number for the port number
const PORT = 3000; 

// need to store the book data
const books = [
{ id: 1, title: 'Book 1', author: 'Author 1' },
{ id: 2, title: 'Book 2', author: 'Author 2' },
{ id: 3, title: 'Book 3', author: 'Author 3' }
];

// need to get data request to retrieve all books from array
app.get('/books', (req, res) => {
    res.json(books);
});

// this will create the server 
app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}');
});
