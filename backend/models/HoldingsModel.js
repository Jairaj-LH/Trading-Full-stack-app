const {model} =require('mongoose')

const {HoldingsSchema} =require('../schemas/HolingsSchema')

const HoldingsModel = new model("holding",HoldingsSchema);


module.exports={HoldingsModel}