const userModel = require("../Model/user");
exports.Registeruser = async (req, res, next) => {
  try {
    // const { names, gender, dob, age, enroll, batch, feeStatus } = req.body;
    const newRegistration = await new userModel(req.body);
    console.log(req.body)
   const saveRegistration=await newRegistration.save();
    res.status(200).json({
      success: true,
      saveRegistration,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err,
    });
  }
};
