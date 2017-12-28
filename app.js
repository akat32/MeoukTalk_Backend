const express = require('express');
const app = express();
const rndstring = require('randomstring');
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const CORS = require('cors')();
const path = require('path');
app.use(CORS);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
require('./mongo');

var port = process.env.PORT || 4000;
var auth = require('./routes/auth')(express.Router(), Users, rndstring);
var friend = require('./routes/friend')(express.Router(), Users);
var chat = require('./routes/chat')(express.Router(),Users,io);
app.set('views', path.join(__dirname, 'views'));
app.set('port', port)
app.set('view engine', 'ejs');

app.use('/friend',friend);
app.use('/auth', auth);
app.use('/chat', chat);

app.get('/', (req,res)=>{
  res.render('main');
})
http.listen(3321, (req,res)=>{
  console.log('Server Porting on 3321');
});
