const {WareHouse} = require("../models");
const config = require("../config/config");

const addWareHouse = async ({
    type,
    currentCapacity,
    maxCapacity,
    city
}) => {
    
    const wareHouse = await WareHouse.create(
        {
            type,
            currentCapacity,
            maxCapacity,
            city
        }
    );
    return wareHouse;
}

const updateWareHouse = async ({id,
    type,
    currentCapacity,
    maxCapacity,
    city
}) => {
    
    const wareHouse = await WareHouse.findOneAndUpdate(
        {_id:id},
        {
            type,
            currentCapacity,
            maxCapacity,
            city
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
