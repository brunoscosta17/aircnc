const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

// GET, POST, PUT, DELETE

// req.query - acessar query params (para filtros - get)
// req.params - acessar route params (put e delete)
// req.body - acessar corpo da requisição (get, post, put)

mongoose.connect('mongodb+srv://brunoscosta17:471577@cluster0-utter.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);