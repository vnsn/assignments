const express = require("express");
const inventoryRouter = express.Router();
const InventoryModel = require("../models/inventory-model");

inventoryRouter.route("/")
    .get((req, res) => {
        InventoryModel.find(req.query, (err, foundInventory) => {
            if(err) res.send(err);
            else res.status(200).send(foundInventory);
        })
    })
    .post((req, res) => {
        // use save()
        const newInventory = new InventoryModel(req.body);
        newInventory.save((err, addedInventory) => {
            if (err) res.send(err);
            else res.status(201).send(addedInventory);
        })
    });

inventoryRouter.route("/:id")

    // GET one
    .get((req, res) => {
        //InventoryModel.findById(req.params.id, () => {})
        // use findOne()
        // the "id" below after params comes from the "/:id" in the .route above
        InventoryModel.findOne({_id: req.params.id}, (err, foundInventory) => {
            if (err) return res.send(err);
            if (!foundInventory) return res.status(404).send({message: "Not found"});
            res.status(200).send(foundInventory);
        })
    })

    // DELETE one
    .delete((req, res) => {
        // InventoryModel.findByIdAndRemove(req.params.id, () => {})
        // use findOneAndDelete
        InventoryModel.findOneAndRemove({_id: req.params.id}, (err, deletedInventory) => {
            if (err) return res.send(err);
            if (!deletedInventory) return res.status(404).send({message: "Not found"})
            res.status(200).send(`${deletedInventory.firstName} was deleted.`);
        })
    })
    // PUT one
    .put((req, res) => {
        // InventoryModel.findByIdAndUpdate(req.params.id, () => {})
        //findOneAndUpdate()
        InventoryModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, updatedInventory) => {
            if(err) return res.send(err);
            if (!updatedInventory) return res.status(404).send({message: "Not found"});
            res.status(200).send(updatedInventory);
        });
    })

module.exports = inventoryRouter;

