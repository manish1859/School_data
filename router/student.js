const express=require('express')
const { student_identify, student_get } = require('../controller/student')
const stu_route=express.Router()

stu_route.post('/student_identify',student_identify)
stu_route.get('/student_data',student_get)


module.exports=stu_route