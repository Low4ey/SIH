const {User} = require("../models")
const config = require("../config/config");
const bcrypt = require("bcrypt");


const createUser = async ({
    email,
    password,
    username
}) => {
    const salt = await bcrypt.genSalt(Number(config.SALT));
    const hashPassword = await bcrypt.hash(password , salt);

    const user = await User.create(
        {
            email,
            password:hashPassword,
            username
        }
    )
    return user;
}

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



module.exports = {createUser, checkEmail}; 