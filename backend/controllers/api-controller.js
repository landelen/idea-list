const Idea = require("../models/Idea");
const Challenge = require("../models/Challenge");

const saveIdeas = async (req, res) => {
  try {
    await Idea.deleteMany();
    await Idea.insertMany(req.body);
    res.status(200).send("Ideas saved");
  } catch (error) {
    res.status(500).send(error);
  }
};

const saveChallenges = async (req, res) => {
  try {
    await Challenge.deleteMany();
    await Challenge.insertMany(req.body);
    res.status(200).send("Challenges saved");
  } catch (error) {
    res.status(500).send(error);
  }
};

const loadIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.status(200).json(ideas);
  } catch (error) {
    res.status(500).send(error);
  }
};

const loadChallenges = async (req, res) => {
  try {
    const completedTasks = await Challenge.find();
    res.status(200).json(completedTasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  saveIdeas,
  saveChallenges,
  loadIdeas,
  loadChallenges,
};
