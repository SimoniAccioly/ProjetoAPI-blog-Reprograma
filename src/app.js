const express = require('express');
const app = express();

const novoPost = require('./routes/blog-reprograma-routes');

app.use(express.json());

app.use('/', novoPost);

module.exports = app;

