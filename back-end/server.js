const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//sets up express
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

// connect to the database
mongoose.connect('mongodb://localhost:27017/dreambike', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'session',
    keys: ['secretValue'],
    cookie: {
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// import the users module and setup its API path
const users = require("./users.js");
app.use("/api/users", users.routes);

//*******ADDED*******
const User = users.model;

//*******ADDED*******
const validUser = users.valid;

// Create a newly assembled bike. Takes suspension, frame, and tire type.
app.post('/api/bikes', validUser, async (req, res) => {
  const bike = new Bike({
    user: req.user,
    suspension: req.body.suspension,
    frame: req.body.frame,
    tires: req.body.tires,
  });
  try {
    console.log(req.body);
    await bike.save();
    res.send(bike);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Create a scheme for fully assembled bikes.
const bikeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  suspension: String,
  frame: String,
  tires: String,
  created: {
    type: Date,
    default: Date.now
  },
});

// Create a model for assembled bikes.
const Bike = mongoose.model('Bike', bikeSchema);

// Gets a list of all assembled bikes.
app.get('/api/bikes', validUser, async (req, res) => {
  try {
    let bikes = await Bike.find({
      user: req.user
    }).sort({
      created: -1
    });
    console.log("server data: " + bikes);
    return res.send({
      bikes: bikes
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Retrieves the specific ID of bike and deletes.
app.delete('/api/bikes/', validUser, async (req, res) => {
  console.log("deleteing this bike: " + req);
  try{
    await Bike.deleteOne(req.bike);
    res.sendStatus(200);
  }catch (error) {
  console.log(error);
  res.sendStatus(500);
  }
});

//Retrieves and edits specific bike.
app.put('/api/bikes/', validUser, async (req, res) => {
  let editedbike;
  console.log("ATTEMPTING: " + req );
  try{
    editedbike = await Bike.findOne(req.bike);
    editedbike.frame = req.body.frame;
    editedbike.save();
    res.sendStatus(200);
  }catch (error) {
  console.log(error);
  res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));