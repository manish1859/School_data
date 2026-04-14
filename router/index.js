const express=require('express')
const stu_route = require('./student')
const feesrouter = require('./fees')
const course_router = require('./courses')
const themeroute = require('./setting')
const route = require('./login')
const router=express.Router()

router.use(route)
router.use(stu_route)
router.use(feesrouter)
router.use(course_router)
router.use(themeroute)

module.exports=router