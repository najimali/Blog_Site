const express = require('express'),
    router = express.Router(),
    Blog = require('../models/Blog'),
    mongoose = require('mongoose');

// NEW ROUTE 
router.get("/blog/new", (req, res) => {
    res.render("new");
});
router.post("/blog/new", (req, res) => {
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

module.exports = router;