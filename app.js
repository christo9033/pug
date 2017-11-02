const express = require('express');
const index = require('./routes/index');
const bodyParser = require('body-parser');
const pug = require('pug');

let app = express(); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.set('views', './views');
app.set('view engine', 'pug');


let server = app.listen(3000, function () {
  let port = server.address().port;
  console.log(`Server is listening on port ${port}`);
});