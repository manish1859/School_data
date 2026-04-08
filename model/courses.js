const { Schema, mongoose } = require("mongoose");

const courseSchema=new Schema({
    name:{
        type:String,
        require:true,
    },
    totalfees:{
        type:Number,
        require:true
    },
    duration:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }

},{timestamps:true}
)

const coursetype=mongoose.model('Course',courseSchema)
module.exports=coursetype