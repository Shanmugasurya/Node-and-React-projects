var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = [{
    name: "Surya",
    age: 22,
    salary: 40000
  },
  {
    name: "Shan",
    age: 21,
    salary: 45000
  }]
  res.render('index', { title: 'Express', myName: 'Surya', users:data });
});

module.exports = router;
