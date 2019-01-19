const router = require("express").Router();
const Tutor = require("../models/Tutor.js");

router.post("/save", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  Tutor.create(req.body)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    // if not, we can at least catch the error
    res.json(err);
  });
});

router.get("/tutor-info/:id", function(req, res) {
  console.log("start request");
  // as long as req.body matches what the model expects, this should insert into the database
  Tutor.find({ _id: req.params.id})
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    // if not, we can at least catch the error
    res.json(err);
  });
});

module.exports = router;