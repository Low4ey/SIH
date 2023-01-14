const mongoose = require('mongoose');
const {Schema}=mongoose;

const wareHouseSchema=new Schema({

        type:{
            type:String
        },
        currentCapacity:{
            type:Number
        },
        maxCapacity:{
            type:Number
        },
        city:[{type:String}]
})

const WareHouse=mongoose.model.WareHouse||mongoose.model("WareHouse",wareHouseSchema);
module.exports=WareHouse;