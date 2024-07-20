//Crie um Objeto produto com as propriedades nome,preco e quantidade.  Em seguida, calcule e imprima o valor total do estoque (preço * quantidade).

const produto = {
    nome: "livro",
    preco: 50,
    quantidade: 5,
};

const valorTotal = produto.preco * produto.quantidade;
console.log("O valor total do estoque é: ", valorTotal);