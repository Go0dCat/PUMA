const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

const config = {
  autoIndex: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const app = express();

//db connecttion
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/puma', config);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to db'));

//serves static files directly from server
//app.use(express.static('../../client/public'));

//fixes cors
app.use(cors());
app.use(express.json());
app.use('/api', require('../routes/api'));
app.use('/api', require('../routes/product'));
app.use('/api', require('../routes/adjustpricelevel'));
app.use('/api', require('../routes/site'));

//error handling from db
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});

app.listen(process.env.PORT || 8081);
