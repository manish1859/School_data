const school_data = require("../model/school");

const student_identify=async(req,res)=>{
    const {fullName,admissionDate,scholarship,category,city,email,institute,remarks,centerCode,dob,course,finalAmount,residence,contact,degree,result,counselling,courseStatus,formNumber,gender,fees,duration,tax,permanent,parentContact,passingYear,admissionBy,feesBy}=req.body;

    if(!fullName||!admissionDate||!scholarship||!category||!city||!email||!institute||!remarks||!centerCode||!dob||!course||!finalAmount||!residence||!contact||!degree||!result||!counselling||!courseStatus||!formNumber||!gender||!fees||!duration||!tax||!permanent||!parentContact||!passingYear||!admissionBy||!feesBy){
        return res.status(404).json({
            success:false,
            message:'All Field are required'
        })
    }

    const student_email=await school_data.findOne({email})
    if(student_email){
        return res.status(404).json({
            success:false,
            message:'This email is already'
        })
    }

    const student_contact=await school_data.findOne({contact});
    if(student_contact){
        return res.status(404).json({
            success:false,
            message:"This contact number is already"
        })
    }

    const student=await school_data.create({fullName,admissionDate,scholarship,category,city,email,institute,remarks,centerCode,dob,course,finalAmount,residence,contact,degree,result,counselling,courseStatus,formNumber,gender,fees,duration,tax,permanent,parentContact,passingYear,admissionBy,feesBy})

    return res.status(201).json({
        success:true,
        data:student,
        message:'Add Student Successfully'
    })

}

const student_get=async(req,res)=>{
    const student =await school_data.find()
    if(!student||student.length===0){
        return res.status(404).json({
            success:false,
            message:'student data not find'
        })
    }

    return res.status(200).json({
        success:true,
        data:student
    })
}

module.exports={student_identify,student_get}