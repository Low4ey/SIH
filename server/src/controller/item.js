const {Item} = require("../models");
const config = require("../config/config");

const addItem = async ({
    title,
    description,
    weight,
    dimension
}) => {
    
    const item = await Item.create(
        {
            title,
            description,
            weight,
            dimension
        }
    );
    return item;
}

const updateItem = async ({id,
    title,
    description,
    weight,
    dimension
}) => {
    
    const item = await Item.findOneAndUpdate(
        {_id:id},
        {
            title,
            description,
            weight,
            dimension
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );
    return item;
}

const getItemInfo = async () => {
    const allItem = await Item.find();
      return allItem;
}
  
const removeItem = async ({id}) => {
    
    const item = await Item.findById({_id:id});
    await item.remove();

}

module.exports = { getItemInfo, addItem, updateItem, removeItem };
