const express = require('express');

const router = express.Router();
router.get('/', (req, res)=>{
    res.send('Olá Mundo!');
});
router.get('/sobre', (req, res)=>{
    res.send('Página Sobre');
});

module.exports = router;