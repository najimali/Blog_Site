const express = require('express'),
    router = express.Router(),
    Blog = require('../models/Blog'),
    mongoose = require('mongoose');


router.get("/", (req, res) => {
    res.redirect("/blog/index");
});

router.get("/blog", (req, res) => {
    res.redirect("/blog/index");
});

// INDEX ROUTE 
router.get("/blog/index", (req, res) => {
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

module.exports = router;