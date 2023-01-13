const mongoose = require('mongoose');

const userTokenSchema = new mongoose.Schema(
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

const UserToken= mongoose.model.UserToken || mongoose.model('UserToken', userTokenSchema);

module.exports = UserToken;