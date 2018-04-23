const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const logger = require("./middleware/logger.js");


const bountyRouter = require("./routes/bounties.js");

const app = express();
const port = 8080;

// let bounties = require("./bounties");

//middleware
app.use(bodyParser.json());

app.use("/", logger);
// if you don't specify an endpoint, it assumes you want "/", so you don't have to include it. But this is what it is actually doing.


// routes used to be here but now we're
// outsourcing routing
app.use("/bounties", bountyRouter);


// mongoose - 19 April 2018
mongoose.connect("mongodb://localhost:27017/enemies", (err) => {
    if (err) console.error(err);
    console.log("Connected to MongoDB");
})

app.listen(port, () => console.log(`server up: ${port}`));
