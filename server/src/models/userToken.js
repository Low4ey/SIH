const mongoose = require('mongoose');

const user_token = new mongoose.Schema(
{
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    token:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        expires: 30*86400
    }
});

const UserToken = mongoose.model("UserToken", user_token)

export default UserToken;