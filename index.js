const express = require("express");
const connectDB = require("./db/connect");
const dotenv = require("dotenv");
const companyRoutes = require("./routes/company");
const hiringProcessRoutes = require("./routes/hiringprocess");
const codingRouteRoutes = require("./routes/codingRound");
const interviewRoundRoutes = require("./routes/interviewRound");
const companyemployee = require("./routes/companyemployee");
const question = require("./routes/programmingquestion");
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(express.json());
app.use("/api/company", companyRoutes);
app.use("/api/hiring", hiringProcessRoutes);
app.use("/api/codinground", codingRouteRoutes);
app.use("/api/interviewround", interviewRoundRoutes);
app.use("/api/companyemployee", companyemployee);
app.use("/api/question", question);
app.listen(8000, async () => {
  console.log("Server Started at port 8000");
  try {
    await connectDB(process.env.DATABASE_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
});
