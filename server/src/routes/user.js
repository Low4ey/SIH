const express = require("express");
const { userController } = require("../controller");
const router = express.Router();



router.post("/",async(req,res)=>{
    try{
        const result=await userController.createUser(req.body);
        res.json(result);
    }catch(error){
        console.log(error);
    }
})

module.exports=router;