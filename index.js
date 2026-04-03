const express=require('express');
const connect = require('../config/db');
const app=express();
const cors = require('cors');
const router = require('./router');

const port=4600;

app.use(cors({
  origin: "*"
}));

app.use(express.json())
app.use('/api',router)


const server=async()=>{
    try {
        await connect()
        app.listen(port,"0.0.0.0", ()=>{
            console.log(`port is run ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
server()