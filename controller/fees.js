const Fees = require("../model/fees");
const school_data = require("../model/school");


const createFees = async (req, res) => {
    try {
        const { student_id, amount, paymentMode } = req.body;

        const student = await school_data.findOne({ student_id });

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        const fee = await Fees.create({
            studentId: student._id,
            student_id: student.student_id,
            fullName: student.fullName,
            contact: student.contact,
            amount,
            totalAmount: student.fees,
            description: req.body.description,
            transactionId: req.body.transactionId,
            paymentMode,
            // invoiceNumber
        });

        return res.status(201).json({
            success: true,
            data: fee,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getfees = async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Fees.find();
        // const student_image = await school_data.findOne({ student_id: id });

        // if (!student || student.length === 0) {
        //     return res.status(400).json({
        //         success: false,
        //         message: 'data not found'
        //     });
        // }

        if (!student_image) {
            return res.status(404).json({
                success: false,
                message: 'student image not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: student,
            // image: student_image.image
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


const getStudentById = async (req, res) => {
  try {
    const { id } = req.params; 

    const student = await school_data.findOne({ student_id: id }).select('fullName contact amount');

    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    return res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createFees,getfees,getStudentById };