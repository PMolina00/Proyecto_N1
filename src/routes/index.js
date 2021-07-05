const { Router } = require("express");

const router = Router();

router.use("/", (req, res, next)=>{
    res.send("hola mundo")
})

module.exports = router;