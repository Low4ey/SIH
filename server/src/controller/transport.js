const {Transport} = require("../models");
const config = require("../config/config");

const addTransport = async ({
    title,
    description,
    weight,
    dimension
}) => {
    
    const transport = await Transport.create(
        {
            title,
            description,
            weight,
            dimension
        }
    );
    return transport;
}

const updateTransport = async ({id,
    title,
    description,
    weight,
    dimension
}) => {
    
    const transport = await Transport.findOneAndUpdate(
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
    return transport;
}

const getTransportInfo = async () => {
    const alltransport = await Transport.find();
      return alltransport;
}
  
const removeTransport = async ({id}) => {
    
    const transport = await Transport.findById({_id:id});
    await transport.remove();

}

module.exports = { getTransportInfo, addTransport, updateTransport, removeTransport };
