var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login',(req,res,next)=>{
   res.send({
     code:1
   })
})

module.exports = router;
