const express = require("express");
const bountyRouter = express.Router();
const uuid = require("uuid");

let bounties = require("../bountyData.js");

// have to change the /bounties to just /
// otherwise it will be duplicated
// and would have to type /bounties/bounties

bountyRouter.route("/")
    .get((req, res) => {
        const { query } = req;
        const queriedBounties = bounties.filter( bounty => {
            //assume true until proven otherwise
            for (let key in query) {
                if (!bounty.hasOwnProperty(key) || String(bounty[key]).toLowerCase() !== query[key].toLowerCase()) {
                    return false;
                }
            }
            return true;
        })

        res.status(200).send(queriedBounties);
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        res.status(200).send(newBounty);
    });

bountyRouter.route("/:id")
    .get((req, res) => {
        const { id } = req.params;
        const foundBounty = bounties.filter(bounty => bounty._id === id)[0];
        res.status(200).send(foundBounty);
    })
    .delete((req, res) => {
        const { id } = req.params;
        bounties = bounties.filter(bounty => bounty._id !== id);
        res.status(204).send();
    })
    .put((req, res) => {
        const { id } = req.params;
        let editedBounty = req.body;
        bounties = bounties.map(bounty => bounty._id === id ? editedBounty = {...bounty, ...editedBounty} : bounty);
        res.status(200).send(editedBounty);
    })




module.exports = bountyRouter;

