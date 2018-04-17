const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const uuid = require("uuid");

// let cats = require("./cats.json");
let cats = require("./cats.js");
let todos = require("./todos.js");

const port = 8080;

//middleware (conveyor belt)
app.use(bodyParser.json());

// ROUTES
app.route("/cats")
    .get((req, res) => {
        res.status(200).send(cats);
    })
    .post((req, res) => {
        console.log(req.body);
        const newCat = req.body;
        newCat._id = uuid() + "DERP";
        cats.push(newCat);
        res.status(201).send(newCat);
    });


// GET ONE request
// Any requests to the /cats/id endpoints, 
// we will send back the cat matching that id
// app.route("/cats/:id/:breed/:name/:age")
app.route("/cats/:id")
    .get((req, res) => {
        console.log(req.params);

        // req.params is built into Express, like this.props.match.params is built into React Router
        const { id } = req.params;

        // send back the object at position 0 of the cats array.
        // (filter always returns an array, even if only one result)
        const foundCat = cats.filter( cat => cat._id === id)[0];
        res.status(200).send(foundCat);
    })
    .delete((req, res) => {
        const { id } = req.params;

        // find and remove the cat matching id.
        cats = cats.filter(cat => cat._id !== id);

        // res.status(200), send({message: `${id} was successfully removed!`});
        res.status(204).send(); 
    })

    //kind of combo of get one and post
    .put((req, res) => {

        // find the param id
        const { id } = req.params;
        let editedCat = req.body;

        // map through cats and replace the cat w/matching id with req.body
        cats = cats.map(cat => cat._id === id ? editedCat = {...cat, ...editedCat} : cat);
        res.status(200).send(editedCat)
    })


app.route("/todos")
    .get((req, res) => {
        res.status(200).send(todos);
    })
    .post((req, res) => {
        console.log(req.body)

        // get the new content
        const newTodo = req.body;

        // assign ID
        newTodo._id = uuid();

        // add to "database" (array)
        todos.push(newTodo);

        // send back data that was added
        res.status(201).send(newTodo);
    })

    app.route("/todos/:id")
    .get((req, res) => {
        console.log(req.params);

        // req.params is built into Express, like this.match.params is built into React Router
        const { id } = req.params;

        // send back the object at position 0 of the todos array.
        // (filter always returns an array, even if only one result)
        const foundTodo = todos.filter( todo => todo._id === id)[0];
        res.status(200).send(foundTodo);
    })
    .delete((req, res) => {
        const { id } = req.params;

        // find and remove the todo matching id.
        todos = todos.filter(todo => todo._id !== id);

        // res.status(200), send({message: `${id} was successfully removed!`});
        res.status(204).send();   // 
    })

    //kind of combo of get one and post
    .put((req, res) => {

        // find the param id
        const { id } = req.params;
        let editedTodo = req.body;

        // map through todos and replace the todo w/matching id with req.body
        todos = todos.map(todo => todo._id === id ? editedTodo = {...todo, ...editedTodo} : todo);
        res.status(200).send(editedTodo);
    })

app.listen(port, () => console.log(`Server running on port ${port}`));
