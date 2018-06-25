var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/dogs', (req,res) => {
  // res.send('<h1>HERE ARE DOGGOS</h1>')
  // render a dog template, now we need to create a view page for 'dogs'
  res.render('dogs', { message: 'HERE ARE SOME DOGGOS'})
})
module.exports = router;
