const express = require("express"),
  router = express.Router(),
  Blog = require("../models/Blog"),
  mongoose = require("mongoose");
//DELETE BLOG

router.delete("/:id", (req, res) => {
  Blog.findByIdAndRemove(req.params.id, { new: true }, (err, deletedBlog) => {
    if (err) {
      res.status(400).json(err);
    } else if (!deletedBlog) {
      res.status(404).json({ message: "Blog not found." });
    } else {
      res.redirect("/");
    }
  });
});
module.exports = router;
