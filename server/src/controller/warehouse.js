const {WareHouse} = require("../models");
const config = require("../config/config");

const addWareHouse = async ({
    title,
    description,
    weight,
    dimension
}) => {
    
    const wareHouse = await WareHouse.create(
        {
            title,
            description,
            weight,
            dimension
        }
    );
    return wareHouse;
}

const updateWareHouse = async ({id,
    title,
    description,
    weight,
    dimension
}) => {
    
    const wareHouse = await WareHouse.findOneAndUpdate(
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
    return wareHouse;
}

const getWareHouseInfo = async () => {
    const allwareHouse = await WareHouse.find();
      return allwareHouse;
}
  
const removeWareHouse = async ({id}) => {
    
    const wareHouse = await WareHouse.findById({_id:id});
    await wareHouse.remove();

}

module.exports = { getWareHouseInfo, addWareHouse, updateWareHouse, removeWareHouse };
