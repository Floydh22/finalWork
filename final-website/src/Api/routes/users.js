var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.app.locals.db;

  db.collection("users")
  .findOne()
  .then(result => {
    console.log(result);

    res.send(result.color);
  });
});


router.get('/:color', function(req, res, next) {

  var db = req.app.locals.db;
  var color = req.params.color;

  db.collection("users").find({}, {projection: {_id:0, color: 1}}).toArray(function(err,results){
    if(err) throw err;
    for(let result of results){
      if (result.color == color){
        res.send(result.color)
      }
    res.send("Cannot find color");
    }
  })
});


router.post("/", function(req, res, next){
  const color = req.body.color;

  var db = req.app.locals.db;
  db.collection("users").updateOne(
    {"current":"true"},
    {
      $set:{
        "color" : color
      }
      
    },
      {upsert:true}
  );
  res.send("Color inserted");
});

module.exports = router;
