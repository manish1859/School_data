const coursetype = require("../model/courses");
const school_data = require("../model/school");

const student_identify = async (req, res) => {
    try {
        const {
            fullName, admissionDate, scholarship, category, city, email,
            institute, remarks, centerCode, dob, course,
            residence, contact, degree, result, counselling, courseStatus,
            formNumber, gender, tax, permanent, parentContact,
            passingYear, admissionBy, feesBy
        } = req.body;

        // ✅ Required fields check
        if (!fullName || !email || !course || !contact) {
            return res.status(400).json({
                success: false,
                message: 'Name, Email, Contact and Course are mandatory fields.'
            });
        }

        // ✅ Email duplicate check
        const student_email = await school_data.findOne({ email });
        if (student_email) {
            return res.status(400).json({
                success: false,
                message: 'This email is already registered.'
            });
        }

        // ✅ Contact duplicate check
        const student_contact = await school_data.findOne({ contact });
        if (student_contact) {
            return res.status(400).json({
                success: false,
                message: "This contact number is already registered."
            });
        }

        // ✅ Course fetch
        const courseDetails = await coursetype.findOne({ name: course });

        if (!courseDetails) {
            return res.status(404).json({
                success: false,
                message: `Course '${course}' not found. Please select a valid course.`
            });
        }

        const fees = Number(courseDetails.totalfees) || 0;
        const scholarshipValue = Number(scholarship) || 0;

        const discountAmount = (fees * scholarshipValue) / 100;
        const finalAmount = Math.max(0, fees - discountAmount);

        const student = await school_data.create({
            fullName,
            admissionDate,
            category,
            city,
            email,
            institute,
            remarks,
            centerCode,
            dob,
            course,
            fees: fees,
            duration: courseDetails.duration,
            scholarship: scholarshipValue,
            finalAmount: finalAmount,

            residence,
            contact,
            degree,
            result,
            counselling,
            courseStatus,
            formNumber,
            gender,
            tax,
            permanent,
            parentContact,
            passingYear,
            admissionBy,
            feesBy,

            image: req.file ? req.file.filename : ""
        });

        return res.status(201).json({
            success: true,
            data: student,
            message: 'Student added successfully with auto-filled course details.'
        });

    } catch (error) {
        console.error("Error in student_identify:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
const student_get = async (req, res) => {
    try {
        const student = await school_data.find();

        if (!student || student.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'student data not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: student
        });

    } catch (error) {
        console.log(error); 
        return res.status(500).json({
            success: false,
            message: 'ab'
        });
    }
};

const student_id=async(req,res)=>{
    const {id}=req.params;
    const student=await school_data.findById(id)
    if(!student){
        return res.status(404).json({
            success:false,
            message:'Student not found'
        })
    }
    return res.status(200).json({
        success:true,
        message:student
    })
}

const student_idupdate = async (req, res) => {
    try {
        const { id } = req.params;

        let updateData = { ...req.body };

        if (req.file) {
            updateData.image = req.file.filename;
        }

        const student = await school_data.findByIdAndUpdate(id,updateData,{ new: true });

        return res.status(200).json({
            success: true,
            message: student
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


module.exports={student_identify,student_get,student_id,student_idupdate}