const express = require('express');
const app = express();
const rndstring = require('randomstring');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
require('./mongo');


app.listen(3321, (req,res)=>{
  console.log('Server Porting on 3321');
});