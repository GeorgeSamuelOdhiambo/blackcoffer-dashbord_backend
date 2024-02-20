const express = require("express");
const route = express.Router();


const getControl = require("../Controls/getcontrol");

route.get("/", getControl.getsBlackCofferData);

module.exports = route;
