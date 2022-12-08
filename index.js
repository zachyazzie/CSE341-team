const {
    errorLogger,
    errorResponder,
    invalidPathHandler,
} = require('./middleware/middleware')

const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 8080;
require('./db/database')
app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'));

app.invalidPathHandler;

process.on('uncaughtException', (err, origin) => {
  console.log(
    process.stderr.fd,
    `caught exception: :{err}\n` + `Exception origin: ${origin}`
  );
});

//Connect to DB only if not in test
if(process.env.NODE_ENV !== 'test') {
  mongoose
    .connect(process.env.DB_CONNECTION_STRING)
  
    .then(() => {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    })
    .catch((err) => {
      console.error('Error connecting to Mongo', err);
    });
} else {
  // we should be in test mode
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
}

  module.exports = app;