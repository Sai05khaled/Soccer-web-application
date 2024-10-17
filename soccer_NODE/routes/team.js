const express = require("express");
const router = express.Router();
const Team = require("../models/team");

// here into add team
router.post("/add-team", (req, res) => {
  const data = new Team({
    name: req.body.name,
    lieu: req.body.lieu,
    logo: req.body.logo,
  });
  data.save().then(() => {
    res.status(200).json({
      message: "team added",
    });
  });
});

// here into get all teams
router.get("/teams", (req, res) => {
  Team.find().then((findedObject) => {
    res.status(200).json({
      data: findedObject,
    });
  });
});

// here into get team by id
router.get("/team_by_id/:id", async (req, res) => {
  let id = mongoose.Types.ObjectId.isValid(req.params.id);
  if (id) {
    const team = await Team.findOne({ _id: req.params.id });
    if (team !== null && team !== undefined) {
      res.status(200).json({
        data: team,
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

router.delete("/delete_team/:id", (req, res) => {
  Team.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "team deleted",
      });
    })
    .catch(() => {
      res.status(200).json({
        message: "errrrr",
      });
    });
});

router.put("/update-team", (req, res) => {
  const data = new Team({
    _id: req.body._id,
    name: req.body.name,
    lieu: req.body.lieu,
    logo: req.body.logo,
  });

  Team.updateOne({ _id: req.body._id }, data).then(() => {
    res.status(200).json({
      message: "team updated",
    });
  });
});

module.exports = router;
