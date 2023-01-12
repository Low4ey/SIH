const express = require("express");
const { userController } = require("../controller");
const { checkEmail } = require("../controller/user");
const router = express.Router();



router.post("/signup",async(req,res)=>{
    try{
        if(await checkEmail(req.body))
            res.status(400).json({error:true, message:"User with given email already exists"});
        const result=await userController.createUser(req.body);
        res.json(result);
    }catch(error){
        console.log(error);
    }
})

module.exports=router;