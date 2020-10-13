const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  seedDb = require("./seeds"),
  methodOverride = require("method-override"),
  Keys = require("./config/Keys"),
  envSetup = require("dotenv").config();

console.log(Keys.mongoDB.password);
//Mongoose Config

// start the mongo server in another bash by ./mongod command
async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-db-name> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const mongoAtlasUri = `mongodb+srv://${Keys.mongoDB.username}:${Keys.mongoDB.password}@firstcluster.4rc4s.mongodb.net/${Keys.mongoDB.dbname}?retryWrites=true&w=majority`;

  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(
      mongoAtlasUri,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      () => console.log(" Mongoose is connected")
    );

    // Make the appropriate DB calls
  } catch (e) {
    console.error(e);
    console.log("could not connect");
  }
}

main().catch(console.error);
// seedDb();

//App config
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//ROUTER
app.use(require("./routes/get_blogs"));
app.use(require("./routes/post_blog"));
app.use(require("./routes/show_blog"));
app.use(require("./routes/put_blog"));
app.use(require("./routes/delete_blog"));

// Setting up port
const hostname = "localhost";
port = 3000;
app.listen(port, hostname, () => {
  console.log(`Blog Site Server running at http://${hostname}:${port}/`);
});
