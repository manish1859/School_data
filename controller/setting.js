const setting = require("../model/setting");

const updateTheme = async (req, res) => {
    try {
        const { id } = req.params;

        const { themeColor, institution } = req.body;

        let updateData = {themeColor,institution};

        if (req.file) {
            updateData.logo = req.file.filename; 
        }

        const data = await setting.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Setting not found"
            });
        }

        return res.status(200).json({
            success: true,
            data
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = { updateTheme };