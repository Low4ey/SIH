const express =require("express");
const config = require("./src/config/config");
const dbConnect = require("./src/service/db");
const bodyParser = require("body-parser");
const {userRouter, itemRouter, orderRouter, stateRouter, transportRouter}=require("./src/routes");
const errorMiddleware = require("./src/utils/error");


const connectApp=async()=>{
    const app=express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(errorMiddleware)
	app.use(express.json());

    try {
		await dbConnect.dbConnect();
		console.log("Database Connected");
	} catch (error) {
		console.log(error);
	}
    app.use("/api",userRouter)
    app.use("/itemapi",itemRouter)
    app.use("/orderapi",orderRouter)
    app.use("/stateapi",stateRouter)
    app.use("/transportapi",transportRouter)
    app.listen(config.PORT,()=>{
        console.log(`Server Running at ${config.PORT}`);
    })
}

connectApp();