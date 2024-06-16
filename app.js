const express = require('express')
const restauranteRoute = require('./routes/restaurante.routes')
const avaliacaoRoute = require('./routes/avaliacao.routes')
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(restauranteRoute);
app.use(avaliacaoRoute);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("porta: " + port);
})