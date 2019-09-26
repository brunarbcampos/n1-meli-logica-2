/*A Lumelância esta precisando de uma calculadora basica para auxiliar seus prestadores.

O usuário deverá digitar:
    - qual operação quer fazer (somar, subtrair, multiplicar e dividir)
    - qual é o valor 1
    - qual é o valor 2
    
Crie um funções para calcular cada uma das operações.
De acordo com a operação escolhida, utilize o switch para escolher a operação e printar o resultado.
Caso o usuário não escolha nenhuma, deve mostrar "Operação inválida". */

const r = require("readline-sync");
var operacao = r.question("Digite a operação: (+ - * /):");
var valor1 = parseInt(r.question("Insira um valor:"));
var valor2 = parseInt(r.question("Insira outro valor:"));


function soma(valor1, valor2){
    var resp = valor1 + valor2;
    return (resp);
}

function subtrair(valor1, valor2){
    var resp = valor1 - valor2;
    return (resp);
}

function multiplicar(valor1, valor2){
    var resp = valor1 * valor2;
    return (resp);
} 

function dividir(valor1, valor2){
    var resp = valor1 / valor2;
    return (resp);
} 

switch (operacao) {
    case "+":
        var resp = soma (valor1,valor2);
        console.log(resp);
    break;

    case "-":
        var resp = diminuir (valor1,valor2);
        console.log(resp);
    break;

    case "*":
        var resp = multiplicar (valor1,valor2);
        console.log(resp);
    break;

    case "/":
        var resp = dividir (valor1,valor2)
        console.log(resp);
    break;

    default: 
    return 'Operação inválida';
}