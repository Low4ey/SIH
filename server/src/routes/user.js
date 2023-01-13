const express = require("express");
const { userController } = require("../controller");
const { checkEmail, getUser ,createUserToken } = require("../controller/user");
const router = express.Router();
const generateTokens = require("../utils/generateTokens")
const bcrypt = require("bcrypt");
const ErrorHandler = require("../utils/errorHandler");


router.post("/signup",async(req,res,next)=>{
    try{
        const result=await userController.createUser(req.body);
        res.json(result);
    }catch(error){
        next(new ErrorHandler(error))
    }
})


router.post("/login",async(req,res)=>{
    try{
        const user = await checkEmail(req.body);
        if(!user)
            return res.status(401).json({error:true, message:"Email or Password Incorrect"});
            
        const currentUser = await getUser(req.body);
        const verifyPassword = await bcrypt.compare(req.body.password , currentUser.password);
        if(!verifyPassword)
            return res.status(401).json({error:true, message:"Email or Password Incorrect"});
        
        const {accessToken , refreshToken} = await generateTokens(currentUser);
        res.status(200).json({
            error:false,
            accessToken,
            refreshToken,
            message:"Logged In"
        })

    }catch(error){
        next(new ErrorHandler(error));
    }
})

module.exports=router;