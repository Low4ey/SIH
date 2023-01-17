const express = require("express");
const { wareHouseController } = require("../controller");
const router = express.Router();
const ErrorHandler = require("../utils/errorHandler");


router.post("/addWareHouse",async(req,res,next)=>{
    try{
        const result=await wareHouseController.addWareHouse(req.body);
        res.json(result);
    }catch(error){
        next(new ErrorHandler(error))
    }
})

router.put("/updateWareHouse/:id" , async(req,res,next)=>{

    try {
        const result = await wareHouseController.updateWareHouse({id:req.params['id'], ...req.body});
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

router.delete("/removeWareHouse/:id" , async(req,res,next)=>{

    try {
        const result = await wareHouseController.removeWareHouse({id:req.params['id']});
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

router.get("/getWareHouseInfo" , async(req,res,next)=>{

    try {
        const result = await wareHouseController.getWareHouseInfo();
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})


module.exports=router;