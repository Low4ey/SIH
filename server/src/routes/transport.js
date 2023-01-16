const express = require("express");
const { transportController } = require("../controller");
const router = express.Router();
const ErrorHandler = require("../utils/errorHandler");


router.post("/addTransport",async(req,res,next)=>{
    try{
        const result=await transportController.addTransport(req.body);
        res.json(result);
    }catch(error){
        next(new ErrorHandler(error))
    }
})

router.put("/updateTransport/:id" , async(req,res,next)=>{

    try {
        const result = await transportController.updateTransport({id:req.params['id'], ...req.body});
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

router.delete("/removeTransport/:id" , async(req,res,next)=>{

    try {
        const result = await transportController.removeTransport({id:req.params['id']});
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

router.get("/getTransportInfo" , async(req,res,next)=>{

    try {
        const result = await transportController.getTransportInfo();
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})


module.exports=router;