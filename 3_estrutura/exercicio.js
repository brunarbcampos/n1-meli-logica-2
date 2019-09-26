var r = require("readline-sync");

var produtos =[
    {produto: "lasanha", tempoDeValidade: 20, Congelado: true},
    {produto: "sorvete", tempoDeValidade: 50, Congelado: true},
    {produto: "biscoito", tempoDeValidade:80, Congelado: false}
];

var posicao = parseInt(r.question("Escolha um produto: 0 - lasanha, 1 - sorvete, 2- biscoito:"));
var validade = parseInt(r.question("Digite quantos dias faltam pra vencer:"));

var produtoSelecionado =  produtos[posicao];

var porcentagem = (validade * 100) / produtoSelecionado.tempoDeValidade;

if (porcentagem <= 2){
    console.log("Descartar produto, muito proximo de vencer") 
}

/*ouuuuuuu else if (porcentagem < 5 && !produtos.Congelado  o "!" é para não */
else if (porcentagem <= 10 && produtos.Congelado == false){
    console.log("Desconto!  Produto não congelado e próximo da validade")
}

/*else if (porcentagem < 5 && produtos.Congelado (sem o true funciona tb)*/
else if (porcentagem < 5 && produtos.Congelado == true){
    console.log("Desconto! Produto congelado e próximo da validade")
}

else {
    console.log("Produto longe do vencimento.")
}