const { urlencoded } = require('body-parser');

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

let blogList    =    [
    {
        image:"https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
    },
    {
        image:"https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
    },
    {
        image:"https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
    },
];




//App config

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.redirect("/index");
});

// INDEX ROUTE 
app.get("/index", (req, res) => {

    
    res.render("index", { blogs: blogList });
});
// NEW ROUTE 
app.get("/new", (req, res) => {
    res.render("new");
});

app.post("/new", (req, res) => {
    let newBlog = req.body.blog;
    blogList.push(newBlog);
    res.render("index",{ blogs: blogList });
    // res.redirect('/index');
});
// Setting up port 
app.listen(3000, () => {
    console.log("Blog Site Server started");
});