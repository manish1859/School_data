const { Schema, default: mongoose } = require("mongoose");

const schollSchema = new Schema(
    {
        fullName: {
            type: String,
            require: true
        },
        admissionDate: {
            type: Date,
            default: Date
        },
        scholarship: {
            type: Number,
            require: true
        },
        category: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        institute: {
            type: String,
            require: true
        },
        remarks: {
            type: String,
            require: true
        },
        centerCode: {
            type: String,
            require: true
        },
        dob: {
            type: String,
            require: true
        },
        course: {
            type: String,
            require: true
        },
        finalAmount: {
            type: Number,
            require: true
        },
        residence: {
            type: String,
            require: true
        },
        contact: {
            type: Number,
            require: true
        },
        degree: {
            type: String,
            require: true
        },
        result: {
            type: String,
            require: true
        },
        counselling: {
            type: String,
            require: true
        },
        courseStatus: {
            type: String,
            require: true
        },
        formNumber: {
            type: String,
            require: true
        },
        gender: {
            type: String,
            require: true
        },
        fees: {
            type: Number,
            require: true
        },
        duration: {
            type: String,
            require: true
        },
        tax: {
            type: String,
            require: true
        },
        permanent: {
            type: String,
            require: true
        },
        parentContact: {
            type: Number,
            require: true
        },
        passingYear: {
            type: String,
            require: true
        },
        admissionBy: {
            type: String,
            require: true
        },
        feesBy: {
            type: String,
            enum: ['Cash', 'UPI', 'Card'],
            require: true

        }
    },
    { timestamps: true }
)

const school_data=mongoose.model('student',schollSchema)
module.exports=school_data;