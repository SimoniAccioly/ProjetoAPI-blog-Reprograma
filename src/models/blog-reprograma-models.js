const helper = require('../helpers/helper');


const novoPost = [
  { 
    id: 1, 
    titulo: "Nova Turma {Reprograma}",
    conteudo: "Abrimos vagas para uma nova turma!",
    tags: ["mulheresnati", "powerwomans", "ti", "devas"],
    dataCriacao: helper.novaData(),
  },
  
];

module.exports = novoPost;
