const {User} = require("../models");


const createUser=async({email,password,username})=>{
    const result=await User.create({
        email,password,username
    });
    return result;
}



module.exports={createUser};