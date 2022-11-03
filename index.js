const express = require('express'); 
const app = express();
const cors = require("cors");
app.use(express.json());
require("dotenv").config();
require('./src/db/database')
const {
    errorLogger,
    errorResponder,
    invalidPathHandler,
} = require('./src/middleware/middleware')
const PORT = 8080;

app.use('/', require('./src/routes'))   
app.invalidPathHandler;
app.listen(PORT);