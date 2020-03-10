const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const app = express();

//middleware here
app.use(morgan("dev"));
app.use(bodyParser.json());



//use router here
const router = require('./router')
app.use('/app', router)


app.listen(3000, function() {
  console.log("listening on port 3000!");
});
