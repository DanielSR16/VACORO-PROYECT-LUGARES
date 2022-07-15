    const router = require('express').Router();
    const estado_DAO  = require('../controller/estadoDAO')

    
    router.get('/',(req,res)=>{
        var hash_;
        res.send('Hola prueba estado')

       
    });

    router.get('/all',async(req,res)=>{
        const estados =  await estado_DAO.controller.getAll()
        res.send(estados)
    })





    module.exports = router;