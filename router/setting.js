const express=require('express');
const { updateTheme } = require('../controller/setting');
const manish = require('../multer/multer');
const themeroute=express.Router();

themeroute.put('/updatetheme/:id',manish.single('logo'),updateTheme)

module.exports=themeroute