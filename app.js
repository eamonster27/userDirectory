const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const data = require('./data.js');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'));

app.get('/', function(req, resp){
  resp.render('index', {users :data.users})
});






app.listen(3000, function(){
  console.log("Server launch successful.")
});
