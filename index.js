const express = require("express");
const bodyParser = require("body-parser");
const csv = require('csv-parser');
const dotenv = require('dotenv');
const connectDatabase = require('./config/mongoose');

// const PORT=process.env.PORT;

// const db = require("./config/mongoose");


const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
dotenv.config({path:'config.env'});

//------Connect to Mongo--------//
connectDatabase();

app.use(express.static("./assets"));

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");


//Using express router
app.use("/", require("./routes/index"));


// app.listen(PORT, function(err){
//     if(err){console.log("Error in running Server", err); return;}
//     console.log("Server is up and running at port", PORT);
// });
app.listen(process.env.PORT, console.log(`Server started on port  ${process.env.PORT}`));
