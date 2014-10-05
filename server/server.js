var express = require('express'),
  cors = require('cors');
var product = require('./routes/routes');

 
var app = express();
app.use(cors());

app.get('/product', product.findAll);
app.get('/product/:sku', product.findBySKU);
 

var port = 3000;
app.listen(port);
console.log('Back End Server running at http://127.0.0.1:' + port);
