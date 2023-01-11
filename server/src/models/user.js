// email , phno , name , password , username 
const mongoose = require('mongoose');

const user_details = new mongoose.Schema(
{
    email:
    {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    },
    password:
    {
        type: String,
        required: [true,"Please enter your Password"],
        validate: {
            validator: function(v) {
                return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v);
            },
            message: "Password must have Minimum 8 characters, at least 1 letter and 1 number"
        }
    },
    username:
    {
        type: String,
        required: [true,"Please enter your UserName"],
        validate: {
            validator: function(v) {
                return /^[A-Za-z][A-Za-z0-9_]{5,29}$/.test(v);
            },
            message: "Username not available"
        }
    }
});

module.exports = mongoose.model('Userdetails', user_details);