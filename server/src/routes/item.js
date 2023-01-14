const express = require("express");
const { itemController } = require("../controller");
const router = express.Router();
const ErrorHandler = require("../utils/errorHandler");


router.post("/createItem",async(req,res,next)=>{
    try{
        const result=await itemController.addItem(req.body);
        res.json(result);
    }catch(error){
        next(new ErrorHandler(error))
    }
})

router.put("/updateItem/:id" , async(req,res,next)=>{

    try {
        const result = await itemController.updateItem({id:req.params['id'], ...req.body});
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

router.delete("/removeItem/:id" , async(req,res,next)=>{

    try {
        const result = await itemController.removeItem({id:req.params['id']});
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

router.get("/getItemInfo" , async(req,res,next)=>{

    try {
        const result = await itemController.getItemInfo();
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})


module.exports=router;