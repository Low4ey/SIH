const express =require("express");
const config = require("./src/config/config");
const app=express();

app.listen(config.PORT,()=>{
    console.log(`server Running at ${config.PORT}`);
})