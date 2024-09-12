const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

let bookList = [];
//metodo get del api
/*app.get('/', (req, res) => {
    res.send('Hello World');
});

//metodo post del api
app.post('/', (req, res) => {
    res.send({message:'Hello World'});
});*/

app.post('/book', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const author = req.body.author;
    const published = req.body.published;
    bookList.push({id: generateID(), title: title, description: description, author: author, published: published});
    res.status(200).send(bookList);
});

app.get('/book', (req, res) => {
    res.status(200).json(bookList);
});

app.get('/book/:id', (req, res) => {
    const id = req.params.id;
    const book = bookList.find(book => book.id == id);
    if(book){
        res.status(200).json(book);
    }else{
        res.status(404).send({message: 'book not found'});
    }
});

app.post('/book/:id', (req, res) => {
    const id = req.params.id;
    let book = bookList.find(book => book.id == id);
    const newTitle = req.body.title;
    const newDescription = req.body.description;
    const newAuthor = req.body.author;
    const newPublished = req.body.published;

    book.title = newTitle;
    book.description = newDescription;
    book.author = newAuthor;
    book.published = newPublished;

    //[...bookList, {title: book.title, description: book.description}];

    res.json(bookList);
});

app.put('/book/:id', (req, res) => {
    const id = req.params.id;
    let book = bookList.find(book => book.id == id);
    const newTitle = req.body.title;
    const newDescription = req.body.description;
    const newAuthor = req.body.author;
    const newPublished = req.body.published

    book.title = newTitle;
    book.description = newDescription;
    book.author = newAuthor;
    book.published = newPublished;

    //[...bookList, {title: book.title, description: book.description}];

    res.json(bookList);
});

app.delete('/book/:id', (req, res) => {
    const id = req.params.id;
    bookList = bookList.filter(book => book.id != id);
    res.json(bookList);
});




function generateID() {
    return Math.floor(Math.random() * 1000);
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});