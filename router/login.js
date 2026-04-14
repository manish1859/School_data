const express=require('express')
const { regipost, loginpost, logout, admin } = require('../controller/schoolcontroller')
const adminrole = require('../middleware/status')
const is_token = require('../middleware/is_token')
const route=express.Router()

route.post('/adminregister',regipost)
route.post('/adminlogin',loginpost)
route.delete('/adminlogout',logout)
route.post('/schooladmin',admin)

module.exports=route