const { Schema } = require("mongoose");

settingSchema=new Schema(
    {
        institution:{
            type:String,
            require:true
        },
        logo:{
            type:String,
            require:true
        },
        

    },{timestamps:true}
)