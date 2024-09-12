const express = require('express');
const app = express();
const port = 5000;
app.use(express.json());

let libros = [];

function generateID(){
    return Math.floor(Math.random()*1000);
}

app.get("/",(req,res)=>{
    res.send("Librería");
});

app.post("/libros",(req,res)=>{

    const { title, description, author } = req.body;

    if (!title || !description || !author) {
        return res.status(400).json({ error: 'Todos los campos son necesarios' });
    }

    const libro = { id: generateID(), title, description, author };
    libros.push(libro);
    res.status(201).json(libro);

});

app.get('/libros', (req, res) => {
    res.json(libros);
});

app.get('/libros/:id', (req, res) => {
    const libro = libros.find(l => l.id === parseInt(req.params.id));
    if (libro) {
        res.json(libro);
    } else {
        res.status(404).json({ error: 'Libro no encontrado' });
    }
});

app.put('/libros/:id', (req, res) => {
    const { title, description, author } = req.body;
    const index = libros.findIndex(l => l.id === parseInt(req.params.id));
    
    if (index !== -1) {
        if (!title || !description || !author) {
            return res.status(400).json({ error: 'Todos los campos (title, description, author) son necesarios' });
        }
        libros[index] = { id: parseInt(req.params.id), title, description, author };
        res.json(libros[index]);
    } else {
        res.status(404).json({ error: 'Libro no encontrado' });
    }
});

app.delete('/libros/:id', (req, res) => {
    const index = libros.findIndex(l => l.id === parseInt(req.params.id));
    if (index !== -1) {
        libros.splice(index, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Libro no encontrado' });
    }
});


app.listen(port,() =>{
    console.log("server is running in port" + port);
})