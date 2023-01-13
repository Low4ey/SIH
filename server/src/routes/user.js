const express = require("express");
const { userController } = require("../controller");
const { checkEmail, getUser ,createUserToken } = require("../controller/user");
const router = express.Router();
const generateTokens = require("../utils/generateTokens")
const bcrypt = require("bcrypt");

router.post("/signup",async(req,res)=>{
    try{
        const emailcheck = await checkEmail(req.body);
        if(emailcheck){
            res.json({error : true , message : "Email exits"})
        }
        const result=await userController.createUser(req.body);
        res.json(result);
    }catch(error){
        console.log(error);
        // res.json({error:true , message:"Internal Server error"});
    }
})


router.post("/login",async(req,res)=>{
    try{
        const user = await checkEmail(req.body);
        if(!user)
            return res.status(401).json({error:true, message:"Email or Password Incorrect"});


        const curruser = await getUser(req.body);
        console.log(curruser);
        const verifyPassword = await bcrypt.compare(req.body.password , curruser.password);
        console.log(verifyPassword)
        if(!verifyPassword)
            return res.status(401).json({error:true, message:"Email or Password Incorrect"});
        
        const {accessToken , refreshToken} = await generateTokens(curruser);
        res.status(200).json({
            error:false,
            accessToken,
            refreshToken,
            message:"Logged In"
        })

    }catch(error){
        console.log(error);
        res.status(400).json({error:true , message:"Internal Server error"});
    }
})

module.exports=router;