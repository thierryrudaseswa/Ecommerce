const router = require("express").Router();

router.post("/api/users",(req,res)=>{
    const username = req.body.username;
})

module.exports = router;