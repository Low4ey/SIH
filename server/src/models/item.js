const mongoose = require('mongoose');
const { Schema } = mongoose;
const itemSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    weight: {
        type: Number
    },
    dimension: {
        type: String
    }
}
)

const Item = mongoose.model.Item || mongoose.model('Item', itemSchema);

module.exports = Item;