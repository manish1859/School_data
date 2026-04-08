const express=require('express')
const stu_route = require('./student')
const feesrouter = require('./fees')
const router=express.Router()

router.use(stu_route)
router.use(feesrouter)

module.exports=router