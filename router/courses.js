const express=require('express')
const { course_data, addCourse } = require('../controller/corses')
const course_router=express.Router()

course_router.post('/course_data',course_data)
course_router.get('/courseinfo',addCourse)

module.exports=course_router