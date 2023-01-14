const {Order} = require("../models");
const config = require("../config/config");

const placeOrder = async ({
    item,
    origin,
    destination,
    mode,
    distance
}) => {
    
    const order = await Order.create(
        {
            item,
            origin,
            destination,
            mode,
            distance
        }
    );
    return order;
}

const updateOrder = async ({id,
    item,
    origin,
    destination,
    mode,
    distance
}) => {
    
    const order = await Order.findOneAndUpdate(
        {_id:id},
        {
            item,
            origin,
            destination,
            mode,
            distance
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );
    return order;
}

const getOrderInfo = async () => {
    const allOrder = await Order.find();
      return allOrder;
}
  
const cancelOrder = async ({id}) => {
    
    const order = await Order.findById({_id:id});
    await order.remove();

}

module.exports = { getOrderInfo, placeOrder, updateOrder, cancelOrder };
