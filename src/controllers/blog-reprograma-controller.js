
const blogModel = require('../models/blog-reprograma-models');
const helper = require('../helpers/helper');


 const novoPost = (requisicao, resposta) =>{

   const { titulo,conteudo, tags} = requisicao.body;

   const novaPostagem ={
     id:  helper.obterNovoValor(blogModel),
     titulo: titulo,
     conteudo:conteudo,
     tags: tags,
     dataCriacao: helper.novaData(blogModel)

   }

   blogModel.push(novaPostagem);

   resposta.status(201).json(novaPostagem);
 }

 const deletarPost = (requisicao, resposta) =>{
  const { id } = requisicao.params;

  let filtrados = blogModel.filter(post => {
    return post.id == id;
  })[0];

  const index = blogModel.indexOf(filtrados);
  
  blogModel.splice(index, 1)

  resposta.json(blogModel)
 }

module.exports ={
  novoPost,
  deletarPost
}