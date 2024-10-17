const express = require("express");
const router = express.Router();
const Match = require("../models/match");

// here into add match
router.post("/add-match", (req, res) => {
  const data = new Match({
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
  });
  data.save().then(() => {
    res.status(200).json({
      message: "match added",
    });
  });
});

// here into get all matches
router.get("/matches", (req, res) => {
  Match.find().then((findedObject) => {
    res.status(200).json({
      data: findedObject,
    });
  });
});

// here into get match by id
router.get("/match_by_id/:id", async (req, res) => {
  let id = mongoose.Types.ObjectId.isValid(req.params.id);
  if (id) {
    const match = await Match.findOne({ _id: req.params.id });
    if (match !== null && match !== undefined) {
      res.status(200).json({
        data: match,
      });
    } else {
      res.status(200).json({
        data: {},
      });
    }
  } else {
    res.status(200).json({
      message: "id no valid",
    });
  }

  // const match = await Match.findOne({_id :req.params.id})

  // if (match) {

  // } else {
  //   console.log("nooooo ");

  // }
});

router.delete("/delete_match/:id", (req, res) => {
  Match.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "match deleted",
      });
    })
    .catch(() => {
      res.status(200).json({
        message: "errrrr",
      });
    });
});

router.put("/update-match", (req, res) => {
  const data = new Match({
    _id: req.body._id,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
  });

  Match.updateOne({ _id: req.body._id }, data).then(() => {
    res.status(200).json({
      message: "match updated",
    });
  });
});

module.exports = router;
