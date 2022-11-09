const flash = require("connect-flash");
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const exphbs = require("express-handlebars");
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 8080;
require('./db/database')

// Sets up the views
app.set('views', path.join(__dirname, 'views'))
const hbs = exphbs.create({
  defaultLayout: "main",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

app
.use(cors())
.use(express.json())
.use(express.urlencoded({ extended: true }))
.use('/', require('./routes'));

app.invalidPathHandler;


// I commented this out because it was not giving me a clue on the actual problem

/*process.on('uncaughtException', (err, origin) => {
console.log(
  process.stderr.fd,
  `caught exception: :{err}\n` + `Exception origin: ${origin}`
);
});*/


// flash requires session, so I will keep it commented until it can be used
//app.use(flash())

// global variables
/*app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  let user = null
  if(req.user){
      user =JSON.parse(JSON.stringify(req.user))
  } 
  res.locals.user = user; 
  next();
});*/


//static files
app.use(express.static(path.join(__dirname, 'public')));

//Connect to DB
mongoose
.connect(process.env.DB_CONNECTION_STRING)

.then(() => {
  app.listen(port);
  console.log(`Connected to DB and listening on ${port}`);
})
.catch((err) => {
  console.error('Error connecting to Mongo', err);
});
