
const express = require("express");
const { get } = require("http");
const path = require("path");
const app = express();

app.listen(3030, () => {
    console.log("server corriendo")
})
app-get("/home",function(req,res){
    res.send()
})