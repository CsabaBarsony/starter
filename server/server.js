"use strict";

var _ = require('lodash');
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var cookie = require('cookie-parser');
var portNumber = 3000;

app.get('/user', function(req, res) {
	res.send({
		id: 1,
		name: 'Csati'
	});
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use(cookie());

app.listen(portNumber);

console.log("Server is running on port " + portNumber + "...");