const express = require("express");
const { createFees, getfees, getStudentById } = require("../controller/fees");

const feesrouter = express.Router();

feesrouter.post("/fees", createFees);
feesrouter.get("/feesget/:id", getStudentById);
feesrouter.get("/studentdata", getfees);

module.exports = feesrouter;