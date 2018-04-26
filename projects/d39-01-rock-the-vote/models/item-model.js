const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
    title: String,
    summary: String,
    votes: Number,
    comments: [String]
});

const ItemModel = mongoose.model("items", itemSchema);
module.exports = ItemModel;
