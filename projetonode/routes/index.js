const express = require('express');
const router = express.Router();

// GET: req.query
//POST: req.body
//PARAMETROS DA URL: req.params

// SEND
// JSON

//http://localhost:7777/?nome=Bonieky&idade=90
router.get('/', (req, res)=>{
    let nome = req.query.nome;
    let idade = req.query.idade;

    res.send('Olá, ' + nome+', você tem ' + idade +' anos');
});

//http://localhost:7777/jsonnome?nome=Bonieky&sobrenome=Lacerda
router.get('/jsonnome', (req, res)=>{
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;

    res.json({
        nomeCompleto:nome+ ' ' + sobrenome
    });
});

//http://localhost:7777/jsontudo?nome=Bonieky&sobrenome=Lacerda&idade=20
router.get('/jsontudo', (req, res)=>{
    res.json(req.query);
});

//http://localhost:7777/posts/2
router.get('/posts/:id', (req, res)=>{
    let id = req.params.id;
    res.send('ID DO POST: ' + id);
});

//http://localhost:7777/postslug/teste-de-slug
router.get('/postslug/:slug', (req, res)=>{
    let slug = req.params.slug;
    //Titulo: SEJA BEM VINDO
    //Slug: seja-bem-vindo
    res.send('SLUG DO POST: ' + slug);
});

//http://localhost:7777/sobre
router.get('/sobre', (req, res)=>{
    res.send('Página Sobre');
});

module.exports = router;