const router = require("express").Router();
const pool = require("./dataBase.js");
module.exports = router;

router.get("/userLogin", (req, res) => {
    pool.query("select * from user where username=? and password=?", [req.query.username, req.query.password], (err, data) => {
        if (data.length == 0) {
            res.json({
                code: 0
            })
            return;
        }
        res.json({
            code: 1,
            infor: {username:req.query.username,password:req.query.password}
        })
    })
})
