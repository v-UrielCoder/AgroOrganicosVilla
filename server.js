import express from "express";
import mongoose from "mongoose";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index",{
        "img": "images/background.png"
    })
})

app.listen(3000, ()=>console.log("Server runing"))