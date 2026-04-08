const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
    student_id: {
      type:String,
      require:true
    },
    fullName: {
        type:String,
        require:true
    },
    contact:{
        type:Number,
        require:true
    },

    date: {
      type: Date,
      default: Date.now,
    },

    description:{
        type:String,
        require:true
    },
    amount: {
      type: Number,
      required: true,
    },
    totalAmount: {
        type:String,
        require:true
    },
    transactionId:{
        type:String,
        require:true
    } ,
    paymentMode: {
      type: String,
      enum: ["Cash", "UPI", "Card"],
      required: true,
    },
invoiceNumber: {
  type: String,
  unique: true,
  default: () => {
  
    return `INV-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }
},
  },
  { timestamps: true }
);



const feesschema = mongoose.model("fees", feeSchema);
feeSchema.pre("save", async function (next) {
  try {
    if (!this.invoiceNumber) {
      const count = await mongoose.model("fees").countDocuments();
      this.invoiceNumber = "INV" + String(count + 1).padStart(4, "0");
    }
    next();
  } catch (error) {
    next(error);
  }
});

module.exports=feesschema