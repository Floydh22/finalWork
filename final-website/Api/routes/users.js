var express = require('express');
var router = express.Router();
var corsoptions = {
  origin: "*",
  methods: ["GET","POST"]
};


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
