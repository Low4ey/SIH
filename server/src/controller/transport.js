const {Transport} = require("../models");
const config = require("../config/config");

const addTransport = async ({
    mode,
    coldStorage,
    availabeVehicle
}) => {
    
    const transport = await Transport.create(
        {
            mode,
            coldStorage,
            availabeVehicle
        }
    );
    return transport;
}

const updateTransport = async ({id,
    mode,
    coldStorage,
    availabeVehicle
}) => {
    
    const transport = await Transport.findOneAndUpdate(
        {_id:id},
        {
            mode,
            coldStorage,
            availabeVehicle
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
