var express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('logger'),
  cors = require('cors');

var product = require('./routes/product'); // product.js routes
 
var app = express();

app.use(bodyParser.json());

//app.use(logger());     /* 'default', 'short', 'tiny', 'dev' */

app.use(cors());

// methods in routes/product.js
app.get('/product', product.findAll);
app.get('/product/:sku', product.findBySKU);
app.post('/product', product.addProduct);
app.put('/product/:id', product.updateProduct);
app.delete('/product/:id', product.deleteProduct);
 

var port = 3000;
app.listen(port);
console.log('Back End Server running at http://127.0.0.1:' + port);
