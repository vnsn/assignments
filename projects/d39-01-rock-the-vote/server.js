const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const itemRouter = require("./routes/item-routes");

const app = express();
const port = 8080;

//middleware
app.use(bodyParser.json());

//routes
app.use("/items", itemRouter);


// database
mongoose.connect("mongodb://localhost:27017/issues", err => {
    if(err) throw (err);
    console.log(`Connected to MongoDB via Mongoose on port 27017.`)
});

app.listen(port, () => console.log(`Server running on port ${port}`));
