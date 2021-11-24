const express= require("express");
const path = require("path");
const app=express();

app.listen(3000,()=>console.log("server corriendo en el puerto 3000"));

app.use(express.static(path.resolve(__dirname,"public")));
//tmb se puede poner asi:   app.use(express.static("public"));
//el path resove me da la ruta completa de la carpea public, con el static estoy diciendo que los archivos son estaticos y express debe darlos a la vista y con mi app le digo...ver video
app.get("/", (req,res)=>{
    let htmlPath=path.resolve(__dirname,"./views/home.html");
    res.sendFile(htmlPath);
    
})