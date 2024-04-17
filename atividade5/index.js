const express = require('express');
const estoque = require('./src/estoque');
const app = express();

app.get('/adicionar/:id/:nome/:qtd', function (req, res) {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = estoque.criarProduto(id, nome, qtd);
    estoque.adicionarProduto(p);
    res.send(p);
});

app.get('/listar', function (req, res) {
    res.send(estoque.listarProdutos());
})

app.get('/remover/:id', function (req, res) {
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send(id);
});

app.get('/editar/:id/:qtd', function (req, res) {
    let id = req.params.id;
    let qtd = parseInt(req.params.qtd);

    // Encontra o produto pelo ID
    let produto = estoque.listarProdutos().find(p => p.id === id);

    if (!produto) {
        res.status(404).send('Produto não encontrado.');
        return;
    }

    // Atualiza a quantidade do produto
    produto.qtd = qtd;

    res.send(`Quantidade do produto com ID ${id} atualizada para ${qtd}.`);
});


const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});