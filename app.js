const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Blog = require("./models/Blog"),
    seedDb = require("./seeds");


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



app.get("/", (req, res) => {
    res.redirect("/blog/index");
});

app.get("/blog", (req, res) => {
    res.redirect("/blog/index");
});


// =====================================================
// ROUTE 
// =====================================================

// INDEX ROUTE 
app.get("/blog/index", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { blogs: blogs });
        }
    });


});
// NEW ROUTE 
app.get("/blog/new", (req, res) => {
    res.render("new");
});

app.post("/blog/new", (req, res) => {
    // console.log("NEW Blog");
    // console.log(newBlog);
    Blog.create(req.body.blog, (err, blog) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Blog Added.........");
            //console.log(blog);
            res.redirect('/blog/index');
        }
    });


});

// SHOW PAGE 
app.get("/blog/:id", (req, res) => {
    //Find the user by id
    //then render the show page
    Blog.findById(req.params.id, (err, blog) => {
        if (err) {
            console.log(err);
        } else {
            res.render("show",{blog:blog});

        }
    });

});
// Setting up port 
app.listen(3000, () => {
    console.log("Blog Site Server started");
});