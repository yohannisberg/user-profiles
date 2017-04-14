var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var config = require('./config.js')
var session = require('express-session')
var profileCtrl = require('./controllers/profileCtrl.js')
var userCtrl = require('./controllers/userCtrl.js')

var port = 3948
var app = express()

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.sessionSecret
}))

var corsOptions = {
  origin: 'http://localhost:3948'
};

app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.getFriendsProfiles)

app.listen(port, function () {
  console.log('Listening on port', port);
})
