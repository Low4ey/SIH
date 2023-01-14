const mongoose = require('mongoose');
const { Schema } = mongoose;
const stateSchema = new Schema({
    transport: [{
        type: Schema.Types.ObjectId,
        ref: "Transport"
    }],
    wareHouse: [{
        type: Schema.Types.ObjectId,
        ref: "WareHouse"
    }]
})

const State=mongoose.model.State||mongoose.model("State",stateSchema);

module.exports=State;