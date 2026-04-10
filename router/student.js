const express=require('express')
const { student_identify, student_get, student_id, student_idupdate } = require('../controller/student')
const stu_route=express.Router()
const manish=require('../multer/multer')

stu_route.post("/student_identify", manish.single("image"), student_identify);
stu_route.get('/student_data',student_get)
stu_route.get('/studentsingle/:id',student_id)
stu_route.put('/studentsingleupdate/:id',manish.single("image"),student_idupdate)


module.exports=stu_route