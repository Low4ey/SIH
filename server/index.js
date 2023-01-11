const express =require("express");
const config = require("./src/config/config");
const dbConnect = require("./src/service/db");
const bodyParser = require("body-parser");
const {userRouter}=require("./src/routes")



const connectApp=async()=>{
    const app=express();

    app.use(bodyParser.urlencoded({ extended: true }));
	app.use(express.json());

    try {
		await dbConnect.dbConnect();
		console.log("Database Connected");
	} catch (error) {
		console.log(error);
	}
    app.use("/api",userRouter)
    app.listen(config.PORT,()=>{
        console.log(`Server Running at ${config.PORT}`);
    })
}

connectApp();