const {User} = require("../models")
const config = require("../config/config");
const bcrypt = require("bcrypt");
const UserToken = require("../models/userToken");

const checkEmail = async({
    email
}) => {
    try {
        const user = await User.findOne({email : email})
        if(user)
            return true; 
    } catch (error) {
        console.log(error);
    }
}

const getUser = async({
    email
}) => {
    try {
        const user = await User.findOne({email : email})
        if(user)
            return user; 
    } catch (error) {
        console.log(error);
    }
}

const createUser = async ({
    email,
    password,
    username
}) => {
    
    const salt = await bcrypt.genSalt(Number(config.SALT));
    const hashPassword = await bcrypt.hash(password , salt);

    // const emailcheck = await checkEmail(email);
    // console.log(emailcheck)
    // if(emailcheck)
    // {
    //     console.log("Email Exists")
    //     return {error : true};
    // }

    const user = await User.create(
        {
            email,
            password:hashPassword,
            username
        }
    )
    return user;
}

const createUserToken = async ({
    userId,
    token
}) => {
    const userToken = await UserToken.create(
        {
            userId,
            token,
        }
    )
    return userToken;
}




module.exports = {createUser, checkEmail , getUser , createUserToken}; 