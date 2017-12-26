const express = require('express');
const app = express();
const rndstring = require('randomstring');
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
require('./mongo');

var auth = require('./routes/auth')(express.Router(), Users, rndstring);
var friend = require('./routes/friend')(express.Router(), Users);
var chat = require('./routes/chat')(express.Router(),Users,io);

app.use('/friend',friend);
app.use('/auth', auth);
app.use('/chat', chat);
http.listen(3321, (req,res)=>{
  console.log('Server Porting on 3321');
});
