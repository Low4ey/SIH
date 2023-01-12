
const {User} = require("../models")
const config = require("../config/config");
const bcrypt = require("bcrypt");

// const hashPassword = async({
//     password
// }) => {


//         return hashPassword;
// }

const createUser = async ({
    email,
    password,
    username
}) => {
    // checkEmail();
    const salt = await bcrypt.genSalt(Number(config.SALT));
    console.log(salt);
    console.log(password);
    const hashPassword = await bcrypt.hash(password , salt);
    console.log(hashPassword);
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
        const user = userDetail.findOne({email : email})
        if(user)
            return res.status(400).json({error:true, message:"User with given email already exists"});
    } catch (error) {
        console.log(error);
        res.status(400).json({error:true, message:"Internal Server Error"});
    }
}



module.exports = {createUser, checkEmail}; // , hashPassword