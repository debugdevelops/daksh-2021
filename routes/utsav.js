const express = require("express");
const utsavController = require("../controllers/utsavController");
const insidersController = require("../controllers/insidersController");

const router = express.Router();

router.get("/", utsavController.home);
router.get("/about", utsavController.about);
router.get("/events", utsavController.events);
router.get("/workshop", utsavController.workshop);
router.get("/other", utsavController.other);
router.post("/subscribe", utsavController.subscribe);
router.get("/leaderboard", utsavController.leaderBoard);
router.get("/game", utsavController.game);
router.post("/leaderboard", utsavController.saveScore);
router.get("/:id", insidersController.redirect);

module.exports = router;
