const { ProgrammingQuestion } = require("../models/schema");

const createQuestion = async (req, res) => {
  try {
    const newQuestion = new ProgrammingQuestion(req.body);
    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const questions = await ProgrammingQuestion.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuestionById = async (req, res) => {
  try {
    const question = await ProgrammingQuestion.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//hiring or company id is necessary for updating and deleting not present in schema
module.exports = {
  createQuestion,
  getAllQuestions,
  getQuestionById,
};
