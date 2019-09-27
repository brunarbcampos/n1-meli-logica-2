
//2) Crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
// Ex.: Usuário informa 5 e o programa retorna
// *
// * *
// * * *
// * * * * 
// * * * * * 
//- Você pode concatenar uma string usando: + ou +=

const r = require("readline-sync");

let opcao = r.question("Digite um número de 1 a 5:");
const star = "*";
let add = " ";


for (let i=0; i<opcao ; i++){
    add = add + star;
        console.log(add)
}

/* ou assim:
let numeroDigitado = parseInt(r.question("Informe um número de 1 a 5:"))
let estrelas = " ";

for(let i=0; i<= numeroDigitado; i++){
    estrelas+= "*"
    console.log(estrelas);
}
*/ 