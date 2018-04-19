const mongoose = require("mongoose");


const { Schema } = mongoose;

// Schema is a constructor
// determines the template for all documents in a collection


const inventorySchema = new Schema ({
    firstName: String,
    lastName: String,
    living: Boolean,
    amount: Number,
    type: {
        required: true,
        type: String
    }
})
// type: Sith or Jedi


const InventoryModel = mongoose.model("inventories", inventorySchema);
module.exports = InventoryModel;

// a model in mongoose is a collection
