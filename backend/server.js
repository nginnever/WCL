const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 10;


// this is our MongoDB database
const dbRoute =
  'mongodb+srv://nathan:pass@cluster0-x3jok.mongodb.net/test?retryWrites=true&w=majority';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
// Serve the static files from the React app
//app.use(express.static(path.join(__dirname, '../src/App')));

router.get('/getLatestID', (req, res) => {
  //Data.findOne({id: { $gte: 0 }},(err, data) => {
  Data.findOne({}, {}, { sort: { id : -1 } },(err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data.id });
  });
});

router.post('/getAccount', (req, res) => {
  //Data.findOne({id: { $gte: 0 }},(err, data) => {
  Data.find({ wclname : req.body.name },(err, data) => {
    if (err) return res.json({ success: false, error: err });
    if (data.length === 0) { return res.json({ success: true, unique: true })}
    else { return res.json({ success: true, unique: false }) };
  });
});

router.get('/getAllIDs', (req, res) => {
  Data.findOne({id: { $gte: 0 }},(err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create method
// this method adds new data in our database
router.post('/putData', (req, res) => {
  let data = new Data();

  const {     
    id,
    wclname,
    wclemail,
    password,
    Hfaction,
    Afaction,
    serverSelect,
    wclclass,
    wclprofile,
    wclprofileimage
  } = req.body;

  if ((!id && id !== 0) || !wclprofile) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }

  data.wclname = wclname
  data.wclemail = wclemail

  bcrypt.hash(password, saltRounds, function(err, hash) {
    data.password = hash
    data.Hfaction = Hfaction
    data.Afaction = Afaction
    data.serverSelect =serverSelect
    data.wclclass = wclclass
    data.wclprofile = wclprofile
    data.wclprofileimage = wclprofileimage
    data.id = id
    data.save((err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });
});

// app.use(function(req, res, next) {
//     if((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
//         res.redirect('https://' + req.get('Host') + req.url);
//     }
//     else
//         next();
// });

app.use(function (req, res, next) {
  if (!/https/.test(req.protocol)) {
    return res.redirect("https://" + req.headers.host + req.url)
  } else {
    return next()
  }
})

// append /api for our http requests
app.use('/api', router);

app.use("/", express.static(__dirname + "/../build"))

//app.use(express.static(path.join(__dirname, '/../build')));
app.get('/*', function(req, res) {
    res.sendfile(path.resolve('../build/index.html'));
});

// app.use(express.static(path.join(__dirname, '/../build')));
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));