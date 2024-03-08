const User  = require("../models/User");
const CryptoJS = require("crypto-js");

router.post("/register", async (req,res)=>{
    const newUser = new User({
        username : req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    });
    try{
        const SavedUser = await newUser.save();
        res.status(200).json(SavedUser);

    }catch(err){
        res.status(501).json(err)
    }
})