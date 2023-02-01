const User=require("../models/user");

exports.register=async(req,res)=>
{
    try{
        const {name,admission_no,cgpa,resume_link,password}=req.body;
        let user=await User.findOne({admission_no});
        if(user)
        {
            return res.status(400).json({
                success: false,
                message: "user already present",
              });
        }
        user=await User.create({
            name,
            admission_no,
            cgpa,
            resume_link,
            password
        })
        const token=await user.generateToken();

        const options={
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
        }
        res.status(201).cookie("token", token, options).json({
            success: true,
            user,
            token,
          });
    }
    catch(error)
    {
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
}
exports.login=async(req,res)=>
{
    try{
        const {admission_no,password}=req.body;
        const user=await User.findOne({admission_no}).select("+password");
        if (!user) {
            return res.status(400).json({
              success: false,
              message: "User does not exist",
            });
          }
          
          const isMatch = await user.matchPassword(password);
          if (!isMatch) {
            return res.status(400).json({
              success: false,
              message: "Incorrect password",
            });
          }
        const token=await user.generateToken();

        const options={
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
        }
        res.status(200).cookie("token", token, options).json({
            success: true,
            user,
            token,
          });
    }
    catch(error)
    {
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
}
