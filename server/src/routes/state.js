const express = require("express");
const { stateController } = require("../controller");
const router = express.Router();
const ErrorHandler = require("../utils/errorHandler");


router.post("/addState",async(req,res,next)=>{
    try{
        const result=await stateController.addState(req.body);
        res.json(result);
    }catch(error){
        next(new ErrorHandler(error))
    }
})

router.put("/updateState/:id" , async(req,res,next)=>{

    try {
        const result = await stateController.updateState({id:req.params['id'], ...req.body});
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

router.delete("/removeState/:id" , async(req,res,next)=>{

    try {
        const result = await stateController.removeState({id:req.params['id']});
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

router.get("/getStateInfo" , async(req,res,next)=>{

    try {
        const result = await stateController.getStateInfo();
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})


module.exports=router;