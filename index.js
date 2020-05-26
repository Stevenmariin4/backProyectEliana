const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const indexRoutes = require('./routers/routes')

const app = express();
const router = express.Router();


app.use(bodyParser.json());
app.use('/', indexRoutes)


app.listen(config.api.port, () => {
    console.log('Servicio de mysql escuchando en el puerto', config.api.port);
})