const express = require('express');
const app = express();
// require('sequelize')

const cors = require('cors');
app.use( cors() ); // set headers


// body parser , post data in express server


const MongoClient = require('mongodb').MongoClient;
let db;

MongoClient.connect('mongodb://127.0.0.1:27017/ba', (err, client) => {
  if(err) return console.log(err);

  db = client.db('ba');

});


const server = app.listen(3000, () => {
  console.log('Server is listening on port 3000. Ready to accept EGGS');
});
module.exports = server;

app.get('/', (req, res) => {
  console.log('Eggs have been received');
  // res.send('<h1>Hello World, want to get some EGGS?</h1>');
  res.send('Hello World, want to get some EGGS?');
});

app.use(express.static('public'));
// add query in URL
app.get('/dogs', (req, res) => {
  console.log('got eggs', req.query);
  // res.send(`<h1>Hello Doggo, want to get some EGGS?(roundness ${req.query.roundness})</h1>`)
  res.json({name: 'Rufus', roundness: 7.5});
});


app.get('/flights', (req, res) => {
  db.collection('flights').find().toArray((err, results)=>{
    console.log(results);
    res.json(results)
    // res.json({}); fake line to test
  });
}); // get /flights

app.get('/flights/:id', (req, res) => {
  db.collection('flights').findOne({ number: req.params.id}, (err, result) => {
    res.json(result);
  });

}); // flights/:id


app.get('/flights/search/:origin/:destination', (req, res) =>{
  // console.log(req.params);
  db.collection('flights')
  .find({origin: req.params.origin, destination: req.params.destination})
  .toArray((err, results) => {
    res.json(results);
  });
  // res.json(req.params);
});


// reservations:
// $addToSet
