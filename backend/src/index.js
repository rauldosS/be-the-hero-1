const express = require('express'); // importando o modulo express para a varial express
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333); // ouvir porta 3333