const { InterviewRound } = require("../models/schema");
const createInterviewRound = async (req, res) => {
  try {
    const {
      startDate,
      endDate,
      duration,
      type,
      interviewers,
      hiringProcessId,
    } = req.body;
    const newInterviewRound = new InterviewRound({
      startDate,
      endDate,
      duration,
      type,
      interviewers,
      hiringProcessId,
    });
    await newInterviewRound.save();
    res.status(201).json({ message: "Interview Round added successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getInterviewRound = async (req, res) => {
  try {
    const { id, hiringId } = req.params;
    const interviewRound = await InterviewRound.findById(id);
    if (hiringId != InterviewRound.hiringProcessId) {
      throw { message: "unauthorized" };
    }
    res.status(200).json(interviewRound);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

const updateInterviewRound = async (req, res) => {
  try {
    const { id, hiringId } = req.params;
    const body = req.body;
    const interviewRound = await InterviewRound.findById(id);
    if (hiringId != codingRound.hiringProcessId) {
      throw { message: "unauthorized" };
    }

    await interviewRound.updateOne(body);

    res.status(200).json({ message: "updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createInterviewRound,
  getInterviewRound,
  updateInterviewRound,
};
