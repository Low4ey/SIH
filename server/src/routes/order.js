const express = require("express");
const { orderController } = require("../controller");
const router = express.Router();
const ErrorHandler = require("../utils/errorHandler");


router.post("/placeOrder",async(req,res,next)=>{
    try{
        const result=await orderController.placeOrder(req.body);
        res.json(result);
    }catch(error){
        next(new ErrorHandler(error))
    }
})

router.put("/updateOrder/:id" , async(req,res,next)=>{

    try {
        const result = await orderController.updateOrder({id:req.params['id'], ...req.body});
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

router.delete("/cancelOrder/:id" , async(req,res,next)=>{

    try {
        const result = await orderController.cancelOrder({id:req.params['id']});
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})

router.get("/getOrderInfo" , async(req,res,next)=>{

    try {
        const result = await orderController.getOrderInfo();
        res.json(result);

    } catch (error) {
        next(new ErrorHandler(error))
    }
})


module.exports=router;