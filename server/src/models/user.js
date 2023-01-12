const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
{
    email:
    {
        type: String,
        trim: true,
        lowercase: true,
        // unique: true,
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
                return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/.test(v);
            },
            message: "Password must have Minimum eight characters, at least one letter, one number and one special character"
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

const User= mongoose.model.User || mongoose.model('User', userSchema);

module.exports=User;