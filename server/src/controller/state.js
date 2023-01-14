const {State} = require("../models");
const config = require("../config/config");

const addState = async ({
    transport,
    wareHouse
}) => {
    
    const state = await State.create(
        {
            transport,
            wareHouse
        }
    );
    return state;
}

const updateState = async ({id,
    transport,
    wareHouse
}) => {
    
    const state = await State.findOneAndUpdate(
        {_id:id},
        {
            transport,
            wareHouse
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );
    return state;
}

const getStateInfo = async () => {
    const allState = await State.find();
      return allState;
}
  
const removeState = async ({id}) => {
    
    const state = await State.findById({_id:id});
    await state.remove();

}

module.exports = { getStateInfo, addState, updateState, removeState };
