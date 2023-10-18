import express from "express";
import bodyParser from "body-parser";

const app = express();
app.set('view engine', 'ejs');
const port = 3000;

const bool = false;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    let d = new Date();
    let today = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear(); 
    res.render("index.ejs",{today:today});
});

app.get("/work",(req,res)=>{
    res.render("index1.ejs");
});



app.listen(port,(req,res)=>{
    console.log(`Server started in ${port}`);
});
