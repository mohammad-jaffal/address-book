'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,


  User = require('./api/models/userModel'),
  bodyParser = require('body-parser'),
  jsonwebtoken = require("jsonwebtoken");

const mongoose = require('mongoose');



const dbURi = 'mongodb+srv://admin:admin123@cluster0.qadq5.mongodb.net/address-book-db?retryWrites=true&w=majority';
mongoose.connect(dbURi, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(
            port,
            () => console.log(`listening on port ${port}`)
        );
    })
    .catch((error) => console.log(error));





app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});
var routes = require('./api/routes/userRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});



module.exports = app;