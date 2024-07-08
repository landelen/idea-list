const express = require("express");

const router = express.Router();

const {
  saveIdeas,
  saveChallenges,
  loadIdeas,
  loadChallenges,
} = require("../controllers/api-controller");

router.post("/saveIdeas", saveIdeas);
router.post("/saveChallenges", saveChallenges);

router.get("/loadIdeas", loadIdeas);
router.get("/loadChallenges", loadChallenges);

module.exports = router;
