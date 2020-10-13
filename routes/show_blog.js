const express = require("express"),
  router = express.Router(),
  Blog = require("../models/Blog"),
  mongoose = require("mongoose");

// SHOW BLOG
router.get("/:id", (req, res) => {
  //Find the user by id
  //then render the show page
  Blog.findById(req.params.id, (err, blog) => {
    if (err) {
      res.status(400).json(err);
    } else if (!blog) {
      res.status(404).json({ message: "Blog not found." });
    } else {
      res.render("show", { blog: blog });
    }
    // res.json(blog);
  });
});

module.exports = router;
