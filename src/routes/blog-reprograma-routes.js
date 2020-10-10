const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog-reprograma-controller');


/**
@route POST blog
@desc Criar um post
@access Public 
@endpoint http://localhost:porta/novoPost
**/
router.post('/novoPost', blogController.novoPost);

/**
@route DELETE um post
@desc Deletar uma post pelo seu identificador
@access Public 
@endpoint http://localhost:porta/deletarPost/:id
**/
router.delete('/deletarPost/:id', blogController.deletarPost)

module.exports = router;