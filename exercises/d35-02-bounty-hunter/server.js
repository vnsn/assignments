const express = require("express");
const bodyParser = require("body-parser");

const bountyRouter = require("./routes/bounties.js");

const app = express();
const port = 8080;



// let bounties = require("./bounties");

//middleware
app.use(bodyParser.json());


// routes used to be here but now we're
// outsourcing routing
app.use("/bounties", bountyRouter);


app.listen(port, () => console.log(`server up: ${port}`));
