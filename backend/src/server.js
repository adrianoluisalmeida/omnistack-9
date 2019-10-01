const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-fe5tz.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// req.params = acessar query params (para filtros)
// req.query = acessar query params
// req.body = acessar o corpo da requisição

app.use(express.json());
app.use(routes);

app.listen(3333);