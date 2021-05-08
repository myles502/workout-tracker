const express = require('express');
const mongoose = require('mongoose');
const htmlRoutes = require('./Routes/htmlroutes');
const apiRoutes = require('./Routes/apiroutes')

const PORT = process.env.PORT || 3000;



const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(htmlRoutes);
app.use(apiRoutes);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  