    const router = require('express').Router();
    const express = require('express')
    const municipio_DAO  = require('../controller/municipioDAO')

    
    router.get('/',(req,res)=>{
        var hash_;
        res.send('Hola prueba municiopio')

       
    });

    router.post('/municipioEstado',async(req,res)=>{
        id = req.body.id

        const estado ={
            id : id
        }
        const municipios =  await municipio_DAO.controller.getAll(estado)
        res.send(municipios)
    })


    module.exports = router;