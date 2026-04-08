const express = require('express');
const connect = require('./config/db');
const app = express();
const cors = require('cors');
const router = require('./router');
const path = require("path");

const port =  4600;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api', router);

const server = async () => {
    try {
        await connect();
        app.listen(port, () => {
            console.log(`port is run ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

server();