import express from "express";
import bodyParser from "body-parser";
import path from 'path';
const app = express();
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
const port = 3000;

const bool = false;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    let d = new Date();
    let today = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear(); 
    res.render("index",{today:today});
});

app.get("/work",(req,res)=>{
    res.render("index1");
});



app.listen(port,(req,res)=>{
    console.log(`Server started in ${port}`);
});
