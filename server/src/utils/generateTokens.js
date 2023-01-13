const jwt = require('jsonwebtoken');
const UserToken = require("../models/userToken");
const config = require("../config/config");
const { userController } = require("../controller");


const generateTokens = async(user) =>{
    try {
        const payload = {_id:user._id};
        const accessToken = jwt.sign(
            payload,
            config.ACCESS_TOKEN_PRIVATE_KEY,
            { expiresIn: "14m"}
        )
        const refreshToken = jwt.sign(
            payload,
            config.REFRESH_TOKEN_PRIVATE_KEY,
            { expiresIn: "30d"}
        )

        const userToken = await UserToken.findOne({userId: user._id});
        
        if(userToken) await userToken.remove();
        
        await userController.createUserToken({userId:user._id , token:refreshToken});
        
        return Promise.resolve({accessToken , refreshToken});

    } catch (error) {
        return Promise.reject(error);
    }
}

module.exports = generateTokens;