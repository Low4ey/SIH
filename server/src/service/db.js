const mongoose=require("mongoose")
const config = require("../config/config");
const dbConnect=()=>{
    try {
        mongoose.connect(config.DB);
      } catch (error) {
        console.log(error);
      }
}
module.exports={
    dbConnect
}