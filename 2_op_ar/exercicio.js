//resposta aqui

var r = require("readline-sync");

var produtos = [
    {produto: "produto1", preco: 50},
    {produto: "produto2", preco: 100},
    {produto: "produto3", preco: 150},
];

var posicao = parseInt(r.question("Escolha um produto entre 0 e 2."));
var porcentagem = parseInt(r.question("Digite uma porcentagem:"));


var produtoSelecionado = produto[posicao];

var desconto = produtoSelecionado.preco * (porcentagem /100);

console.log("Produto" + produtoSelecionado.nome + "com desconto é R$" + desconto.toFixed(2));