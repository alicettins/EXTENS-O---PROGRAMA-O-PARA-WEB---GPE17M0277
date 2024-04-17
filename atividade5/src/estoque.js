let produtos = [];

function criarProduto(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function adicionarProduto(p) {
    produtos.push(p);
}

function listarProdutos() {
    return produtos;
}

function removerProduto(id) {
    produtos = produtos.filter((p) => {
        let x = p.id != id;
        return x;
    });
}

function editarProduto(id, novaQuantidade) {
    let produtoIndex = produtos.findIndex((p) => p.id === id);

    if (produtoIndex !== -1) {
        produtos[produtoIndex].qtd = novaQuantidade;
        return { success: true, message: `Quantidade do produto com ID ${id} atualizada para ${novaQuantidade}.` };
    } else {
        return { success: false, message: 'Produto não encontrado.' };
    }
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
};
