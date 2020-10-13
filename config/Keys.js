require("dotenv").config();
module.exports = {
  mongoDB: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    dbname: process.env.DB_NAME,
  },
};
