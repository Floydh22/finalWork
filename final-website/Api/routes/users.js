var express = require('express');
var router = express.Router();
var cors = require('cors');
var corsoptions = {
    origin: "*",
  };
// comment to push
/* GET users listing. */
router.get('/', cors(corsoptions), function(req, res, next) {
  var db = req.app.locals.db;

  db.collection("users")
  .findOne()
  .then(result => {
    console.log(result);

    res.send(result.color);
  });
});

router.post("/", cors(corsoptions), function(req, res, next){
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

router.options("/", cors());

module.exports = router;
