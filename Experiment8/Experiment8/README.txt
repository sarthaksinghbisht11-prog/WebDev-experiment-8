EXPERIMENT 8 - BOOK MANAGEMENT REST API

HOW TO OPEN IN VS CODE
1. Extract the Experiment8.zip file.
2. Open VS Code.
3. Select File > Open Folder.
4. Select the extracted Experiment8 folder.
5. Open Terminal > New Terminal.

INSTALL AND RUN
Run these commands in the VS Code terminal:

    npm install
    npm start

You should see:
    Server running at http://localhost:3000

TEST IN YOUR BROWSER
Open:
    http://localhost:3000/
    http://localhost:3000/books

CRUD API ENDPOINTS
GET     http://localhost:3000/books       Get all books
GET     http://localhost:3000/books/1     Get book with ID 1
POST    http://localhost:3000/books       Add a book
PUT     http://localhost:3000/books/1     Update book with ID 1
DELETE  http://localhost:3000/books/1    Delete book with ID 1

POST AND PUT REQUEST BODY (use Postman, Body > raw > JSON):
{
    "title": "JavaScript Basics",
    "author": "John Smith"
}

NOTE
This beginner project stores books in memory. Data resets when the server restarts.
