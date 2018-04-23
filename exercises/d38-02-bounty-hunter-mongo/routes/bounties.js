const express = require("express");
const bountyRouter = express.Router();
const BountyModel = require("../models/bounty-model");

bountyRouter.route("/")
    .get((req, res) => {
        BountyModel.find(req.query, (err, foundBounty) => {
            if(err) res.send(err);
            else res.status(200).send(foundBounty);
        })
    })
    .post((req, res) => {
        // use save()
        const newBounty = new BountyModel(req.body);
        newBounty.save((err, addedBounty) => {
            if (err) res.send(err);
            else res.status(201).send(addedBounty);
        })
    });

bountyRouter.route("/:id")

    // GET one
    .get((req, res) => {
        //BountyModel.findById(req.params.id, () => {})
        // use findOne()
        // the "id" below after params comes from the "/:id" in the .route above
        BountyModel.findOne({_id: req.params.id}, (err, foundBounty) => {
            if (err) return res.send(err);
            if (!foundBounty) return res.status(404).send({message: "Not found"});
            res.status(200).send(foundBounty);
        })
    })

    // DELETE one
    .delete((req, res) => {
        // BountyModel.findByIdAndRemove(req.params.id, () => {})
        // use findOneAndDelete
        BountyModel.findOneAndRemove({_id: req.params.id}, (err, deletedBounty) => {
            if (err) return res.send(err);
            if (!deletedBounty) return res.status(404).send({message: "Not found"})
            res.status(200).send(`${deletedBounty.firstName} was deleted.`);
        })
    })
    // PUT one
    .put((req, res) => {
        // BountyModel.findByIdAndUpdate(req.params.id, () => {})
        //findOneAndUpdate()
        BountyModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, updatedBounty) => {
            if(err) return res.send(err);
            if (!updatedBounty) return res.status(404).send({message: "Not found"});
            res.status(200).send(updatedBounty);
        });
    })

module.exports = bountyRouter;

