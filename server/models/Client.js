const mongoose=require('mongoose')

const ClientSchema=new mongooseSchema({
  name:{
    type:String,
  },
  email:{
    type:String,
  },
  phone:{
    type:String,
  }
})
module.exports=mongoose.model('Client',ClientSchema)