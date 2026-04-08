const coursetype = require("../model/courses");

const course_data=async(req,res)=>{
    const {name,totalfees,duration,description}=req.body;
    if(!name||!totalfees||!duration){
        return res.status(404).json({
            success:false,
            message:'All field are required'
        })
    }

    const coursedata=await coursetype.create({name,totalfees,duration,description})
    
    return res.status(201).json({
        success:true,
        data:coursedata,
        message:'Successfully add course'
    })


}

const addCourse=async(req,res)=>{
    const course=await coursetype.find()
    if(!course||course.length===0){
        return res.status(404).json({
            success:false,
            message:"courses not found"
        })
    }

    return res.status(200).json({
        success:true,
        data:course
    })
}

module.exports={course_data,addCourse}