const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

// connect to the database
mongoose.connect('mongodb://localhost:27017/todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create a newly assembled bike. Takes suspension, frame, and tire type.
app.post('/api/bikes', async (req, res) => {
  const bike = new Bike({
    suspension: req.body.suspension,
    frame: req.body.frame,
    tires: req.body.tires,
    suspensionPath: req.body.suspensionPath,
    framePath: req.body.framePath,
    tiresPath: req.body.tiresPath,
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
  suspension: String,
  frame: String,
  tires: String,
  suspensionPath: String,
  framePath: String,
  tiresPath: String,
});

// Create a model for assembled bikes.
const Bike = mongoose.model('Bike', bikeSchema);

// Gets a list of all assembled bikes.
app.get('/api/bikes', async (req, res) => {
  try {
    let bikes = await Bike.find();
    res.send(bikes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Retrieves the specific ID of bike and deletes.
app.delete('/api/bikes/:id', async (req, res) => {
  try{
    await Bike.deleteOne(req.bike);
    res.sendStatus(200);
  }catch (error) {
  console.log(error);
  res.sendStatus(500);
  }
});

//Retrieves and edits specific bike.
app.put('/api/bikes/:id', async (req, res) => {
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