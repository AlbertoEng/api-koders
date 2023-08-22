const express = require('express');
const kodersUseCases = require('../usecases/koders.usecase');

const router = express.Router();

router.get('/', async (req, res)=>{
    const koderList = await kodersUseCases.getAll();
    res.json({
        message: 'ok',
        data: koderList
    })
})

router.get('/:id', async ( req, res)=>{
    const koderId = req.params.id;
    const koder = await kodersUseCases.getById(koderId);
    return res.json({
        message: 'ok',
        data: koder
    })
})

router.post('/', async (req, res)=>{
    const newKoder = req.body;
    await kodersUseCases.create(newKoder);
    res.json({
        message: 'koder created succesfully'
    })
})

module.exports = router;


