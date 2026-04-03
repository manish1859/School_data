const express=require('express')
const stu_route = require('./student')
const router=express.Router()

router.use(stu_route)

module.exports=router