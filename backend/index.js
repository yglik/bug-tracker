const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Database
mongoose.connect('mongodb://localhost:27017/bug-tracker', () => {
    console.log("connected to the DataBase")
});
const { Schema } = mongoose;

// Middleware
app.use(cors());
//body-parser from npm is deprecated. TODO - update to Express built-in Method
app.use(bodyParser.json());

// Static
const PORT = 3000;

// Schema & Model
const ticketSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    description: String,
    user:   String,
    date: { type: Date, default: Date.now },
  });

const Ticket = mongoose.model('ticket', ticketSchema);

//Routing
/**
 * TODO - check what is the correct way to respond after post/put/delete
 * current state - frontend app send another get request after post/put/delete request
 */
app.get('/', (req, res) => {
    console.log("got GET request from /");
    Ticket.find().then((tickets) => { res.send(tickets);});
})

app.post('/', (req, res) => {
    console.log("got POST request from /");
    const newTicket = new Ticket({
        title: req.body.title,
        description: req.body.description,
        user: req.body.user
    });
    newTicket.save();
})

app.put('/:ticketID', (req, res) => {
    console.log(`got DELETE request from /${req.params.ticketID}`);
    Ticket.findOneAndUpdate({_id: req.params.ticketID}, { $set: req.body }, () => {});
})

app.delete('/:ticketID', (req, res) => {
    console.log(`got DELETE request from /${req.params.ticketID}`);
    Ticket.findOneAndRemove({_id: req.params.ticketID}, () => {});
})


// LISTEN
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})
