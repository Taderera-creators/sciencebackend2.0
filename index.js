const express = require("express");
const db = require("./models");
const cors = require("cors");
const PORT = 5000;
const app = express();
const userRouter = require("./routes/posts");
const notesRouter = require("./routes/notes");
const userDetailsRouter = require("./routes/user-details");
const logRouter = require("./routes/log-in");
const matterRouter = require("./routes/matter");
const tutorDetails = require("./routes/tutor-details");
const tutorTopics = require("./routes/tutor-topics");
app.use(express.json());
app.use(cors());

app.use("/posts", userRouter);
app.use("/user-details", userDetailsRouter);
app.use("/log-in", logRouter);
app.use("/matter", matterRouter);
app.use("/notes", notesRouter);
app.use("/tutor-topics", tutorTopics);
app.use("/tutor-details", tutorDetails);
db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`Server running at port http://localhost:${PORT}`),
  );
});
