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
            res.status(400).json(err);
        }
        if (!blogs) {
            res.status(404).json({ message: 'Blogs not found.' });
        }
        res.render("index", { blogs: blogs });
        // res.json(blogs);
    });


});
// NEW ROUTE 
app.get("/blog/new", (req, res) => {
    res.render("new");
});

//NEW FORM 
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

// SHOW BLOG
app.get("/blog/:id", (req, res) => {
    //Find the user by id
    //then render the show page
    Blog.findById(req.params.id, (err, blog) => {
        if (err) {
            res.status(400).json(err);
        }
        if (!blog) {
            res.status(404).json({ message: 'Blog not found.' });
        }
        res.render("show", { blog: blog });
        // res.json(blog);
    });

});


//EDIT BLOG
app.get("/blog/:id/edit", (req, res) => {
    //Find the post by edit & then show the values
    Blog.findById(req.params.id, (err, blog) => {
        if (err) {
            res.status(400).json(err);
        }
        res.render("edit", { blog: blog });

    });


});

//UPDATE BLOG 
app.put("/blog/:id", (req, res) => {

    Blog.findByIdAndUpdate(req.params.id, req.body.blog, { new: true }, (err, updateBlog) => {
        if (err) {
            res.status(400).json(err);
        }
        res.redirect(`/blog/${req.params.id}`);
    });
});
//DELETE BLOG

app.delete("/blog/:id",(req,res)=>{

    Blog.findByIdAndRemove(req.params.id,{new:true},(err,deletedBlog)=>{
        if (err) {
            res.status(400).json(err);
        }
        if (!deletedBlog) {
            res.status(404).json({ message: 'Blog not found.' });
        }
        res.redirect("/blog");

    })
});
// Setting up port 
app.listen(3000, () => {
    console.log("Blog Site Server started");
});