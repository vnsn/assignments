const express = require("express");
const mongoose = require("mongoose");

const logger = require("./middleware/logger.js");
const voteRouter = require("./routes/votes.js");

const app = express();
const port = 8080;

//middleware
app.use("/", logger);

//routes
// (endpoint, name of express.Router() const to use)
app.use("/votes", voteRouter);


app.listen(port, () => console.log(`Server running on port ${port}`));
