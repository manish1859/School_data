const { Schema, default: mongoose } = require("mongoose");

const school=new Schema({
      name:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    token:{
        type:String,
     },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        default:null
    },
    joindate:{
        type:Date,
        default:Date,
    },
    status:{
        type:String,
        enum:['active','inactive','On  Leave '],
        default:null
    },
    role:{
        type:String,
        default:'Admin'
    },
    department:{
        type:String,
        default:null
    },
    designation:{
        type:String,
        default:null
    },
    basesalary:{
        type:Number,
        default:0
    },
    address:{
        type:String,
        default:null
    }

})
const schooladmin=mongoose.model('schooladmin',school)
module.exports=schooladmin