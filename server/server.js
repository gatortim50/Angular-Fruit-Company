var express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  morgan = require('morgan');

var product = require('./routes/product');

var app = express();

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
// use morgan to log requests to the console
app.use(morgan('dev'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  next();
});

// invoke methods in routes/product.js
app.get('/product', product.findProduct);     // http://127.0.0.1:4000/product
app.get('/product/:id', product.findById);  // http://127.0.0.1:4000/product/1
app.get('/products', product.findAll);        // http://127.0.0.1:4000/products


var port = 4000;
app.listen(port);
console.log('Server running at http://127.0.0.1:' + port);
