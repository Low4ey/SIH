const express =require("express");
const config = require("./src/config/config");
const dbConnect = require("./src/service/db")
const app=express();

dbConnect();

app.listen(config.PORT,()=>{
    console.log(`Server Running at ${config.PORT}`);
})