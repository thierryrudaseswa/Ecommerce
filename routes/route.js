const router = require("express").Router();



router.post("/api/users",(req,res)=>{
    const username = req.body.username;
    res.send("your usename used is " + username)
});

module.exports = router;