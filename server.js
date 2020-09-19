const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Blog = require("./models/Blog"),
    seedDb = require("./seeds"),
    methodOverride = require('method-override');


//Mongoose Config
const mongooseUrl = "mongodb://localhost:27017/myblog"
// start the mongo server in another bash by ./mongod command
//connecting mongoose 
mongoose.connect(mongooseUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
// seedDb();

//App config

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


//ROUTER 
app.use(require('./routes/get_blogs'));
app.use(require('./routes/post_blog'));
app.use(require('./routes/show_blog'));
app.use(require('./routes/put_blog'));
app.use(require('./routes/delete_blog'));


// Setting up port 
app.listen(3000, () => {
    console.log("Blog Site Server started");
});