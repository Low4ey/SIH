const mongoose = require('mongoose');
const {Schema}=mongoose;

const transportSchema=new Schema({

        mode:{
            type:String
        },
        coldStorage:{
            type:Boolean
        },
        availabeVehicle:{
            type:Number
        }
})

const Transport=mongoose.model.Transport||mongoose.model("Transport",transportSchema);
module.exports=Transport;