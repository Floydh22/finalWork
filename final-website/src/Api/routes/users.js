var express = require('express');
var router = express.Router();

var lights = [
  {"color": 'Red'},
  {"color": 'Green'},
  {"color": 'Off'}
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(lights);
});

router.get('/:color', function(req, res, next) {
  var color = req.params.color;
  for(let light of lights){
    if(light.color == color){
      res.json(light.color);
    }
  }
  res.send("Cannot find color");
});

module.exports = router;
