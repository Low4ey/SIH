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
    phno:
    {
        type: Number,
        trim: true,
        required: [true, "Please enter your phone no."]
    },
    name:
    {
        type: String,
        trim: true,
        required: [true, "Please enter your name"]
    },
    password:
    {
        type: String,
        require: [true,"Please enter your password"]
    },
    username:
    {
        type: String,
        require: [true,"please enter your password"]
    }
});

module.exports = mongoose.model('userdetails', user_details);