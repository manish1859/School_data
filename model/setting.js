const { Schema, default: mongoose } = require("mongoose");

const settingSchema = new Schema(
    {
        institution: {
            type: String,
            require: true
        },
        logo: {
            type: String,
            require: false
        },
        themeColor: {
            type: String,   
            default: "#4f46e5"
        }


    }, { timestamps: true }
)

const setting=mongoose.model('Setting',settingSchema);
module.exports=setting;