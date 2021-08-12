const express = require('express');
const app = express();
const port = 4000;


app.set('views','./views')
app.set('view engine','pug')
app.get('/', function(req, res){  res.render('index');  });




app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });
  