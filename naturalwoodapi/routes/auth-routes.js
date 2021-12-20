const User = require("../models/User");
const passport = require("passport");
const router = require("express").Router();
const CryptoJs =  require("crypto-js");
const jwt = require("jsonwebtoken");
router.post("/register" ,async (req,res)=>{
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        mobileNumber:req.body.mobileNumber,
        password : CryptoJs.AES.encrypt(req.body.password ,process.env.PASS_SEC )
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        console.log(err);

        res.status(500).json({message :"not connected"})
    }

});
router.post("/login" , async(req,res)=>{
    try{
    const user = await User.findOne({ email: req.body.email});
    !user && res.status(401).json({message : "Wrong credentials"})
    const hashPassword = CryptoJs.AES.decrypt(user.password,process.env.PASS_SEC);
    const Originalpassword = hashPassword.toString(CryptoJs.enc.Utf8);
    Originalpassword !== req.body.password && res.status(401).json({message:"Wrong"});
 const accessToken = jwt.sign({
     id : user._id ,
      isAdmin : user.isAdmin  
 }, process.env.JWT_SEC , {expiresIn :"3d"});
 
    const { password , ...others}=user._doc ;
    res.status(200).json({...others , accessToken});
    console.log("Logged in")
    }
    catch(err){
        console.log(err);

        res.status(500).json({message :"not connected"})
    }
});
router.get("/login/failed" , (req,res)=>{
    res.status(401).json({message:"LogIn  Failed"})
})
// router.get("/google", passport.authenticate("google",{scope:["profile"]}));
// router.get("/google/callback", passport.authenticate("google",{
//     successRedirect :"http://localhost:3000/",
//    failureRedirect:"/login/failed"
// }))

module.exports = router ;