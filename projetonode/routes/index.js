const express = require('express');

const router = express.Router();
router.get('/', (req, res)=>{
    let obj = {
        //pageTitle:'Página Padrão'
    };
    res.render('home', obj);
});

module.exports = router;