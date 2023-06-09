var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
require('dotenv').config()
const { sendMessage, getTextMessageInput } = require("../helpers/mesaggeHelper");

router.use(bodyParser.json());

router.post('/', function (req, res, next) {
    var data = getTextMessageInput(process.env.RECIPIENT_WAID, 'Welcome to the Movie Ticket Demo App for Node.js!');
    console.log(data)
    // res.send(data)

    sendMessage(data)
        .then(function (response) {
            // res.redirect('/');
            res.sendStatus(200);
            return;
        })
        .catch(function (error) {
            console.log(error);
            console.log(error.response.data);
            res.sendStatus(500);
            return;
        });
});

module.exports = router;