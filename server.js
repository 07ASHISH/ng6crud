const express = require('express');
const path = require("path");
var logger = require('express-logger');
var fs = require('fs');

const bodyParser = require('body-parser');
const router = require("./RouterBackheand/api");
const cors = require('cors');
const mongoose =require('mongoose');
const configDb= require('./configDB/Db');

const port = process.env.PORT || 4000;
 img_url= '/home/vandana/Desktop/how_to_motivate_yourself_to_workout.jpg';
mongoose.Promise = global.Promise;
mongoose.connect(configDb.DB,{ useNewUrlParser: true }).then(
    () => {console.log("Database is connected")},
    err => {console.log('can not conect to db'+ err)}
);

const app =  express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(logger({path: "logfile.txt"}));



app.use('/api',router);

const server = app.listen(port, () => console.log("magic happen at"+ port));

