const express =require('express'),
    app = express();
    


//App config

app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{

    res.render("index");
});

app.listen(3000,()=>{
    console.log("Blog Site Server started");
});