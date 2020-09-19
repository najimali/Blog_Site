const express = require('express'),
router = express.Router(),
Blog = require('../models/Blog'),
mongoose = require('mongoose');
//EDIT BLOG
router.get("/blog/:id/edit", (req, res) => {
    //Find the post by edit & then show the values
    Blog.findById(req.params.id, (err, blog) => {
        if (err) {
            res.status(400).json(err);
        }
        res.render("edit", { blog: blog });

    });


});

//UPDATE BLOG 
router.put("/blog/:id", (req, res) => {

    Blog.findByIdAndUpdate(req.params.id, req.body.blog, { new: true }, (err, updateBlog) => {
        if (err) {
            res.status(400).json(err);
        }
        res.redirect(`/blog/${req.params.id}`);
    });
});

module.exports = router;
