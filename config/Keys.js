require("dotenv").config();
module.exports = {
  mongoDB: {
    username: "najim-ali",
    password: process.env.PASSWORD,
    dbname: "blog_site",
  },
};
