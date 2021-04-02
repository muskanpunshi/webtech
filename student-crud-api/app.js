const express= require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');

const app= express();

const student=require('./routes/student.route');

mongoose.connect("mongodb://localhost/studentDB", {useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/students',student);
app.listen(3000, () => {
    console.log('Server is up and running on port number 3000');
});
