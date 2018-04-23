const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema is a constructor
// determines the template for all documents in a collection

const bountySchema = new Schema ({
    firstName: String,
    lastName: String,
    dead: Boolean,
    amount: Number,
    type: String
})
// type: Sith or Jedi


const BountyModel = mongoose.model("bounties", bountySchema);
module.exports = BountyModel;

// a model in mongoose is a collection
