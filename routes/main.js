const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send('Api lugares en funcion')
})


module.exports  = router