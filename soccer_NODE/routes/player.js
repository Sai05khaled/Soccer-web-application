const express = require("express");
const router = express.Router();

const Player = require("../models/player");

// here into add Player
router.post("/add-player", (req, res) => {
  const data = new Player({
    name: req.body.name,
    post: req.body.post,
    age: req.body.age,
    team_id: req.body.team_id,
  });
  data.save().then(() => {
    res.status(200).json({
      message: "Player added",
    });
  });
});

// here into get all Players
router.get("/players", (req, res) => {
  Player.find()
    .populate("team_id")
    .then((findedObject) => {
      res.status(200).json({
        data: findedObject,
      });
    });
});

// here into get Player by id
router.get("/player_by_id/:id", async (req, res) => {
  let id = mongoose.Types.ObjectId.isValid(req.params.id);
  if (id) {
    const player = await Player.findOne({ _id: req.params.id });
    if (player !== null && player !== undefined) {
      res.status(200).json({
        data: player,
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
});

router.delete("/delete_player/:id", (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Player deleted",
      });
    })
    .catch(() => {
      res.status(200).json({
        message: "errrrr",
      });
    });
});

router.put("/update-player", (req, res) => {
  const data = new Player({
    _id: req.body._id,
    name: req.body.name,
    post: req.body.post,
    age: req.body.age,
    team_id: req.body.team_id,
  });

  Player.updateOne({ _id: req.body._id }, data).then(() => {
    res.status(200).json({
      message: "Player updated",
    });
  });
});

module.exports = router;
