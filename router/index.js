const express=require('express')
const stu_route = require('./student')
const feesrouter = require('./fees')
const course_router = require('./courses')
const router=express.Router()

router.use(stu_route)
router.use(feesrouter)
router.use(course_router)

module.exports=router