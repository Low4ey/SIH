const mongoose = require('mongoose');
const {Schema}=mongoose;
const orderSchema= new Schema(
    {
        item:[{
            type:Schema.Types.ObjectId,ref:"Item"
        }],
        origin:{
            type:String,
            required:true
        },
        destination:{
            type:String,
            required:true
        },
        mode:{
            type:String,
            required:true
        },
        distance:{
            type:Number
        }
    }
)
const Order= mongoose.model.Order || mongoose.model('Order', orderSchema);
module.exports=Order;