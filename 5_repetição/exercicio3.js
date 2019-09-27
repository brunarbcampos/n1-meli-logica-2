//3) Crie um programa que pergunta ao usuário seu nome. 
//Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
//Enquanto usuário digitar qualquer palavra, print o que ele está digitando,
// mas avise que para sair ele pode dizer "Tchau".
//O programa vai dizer "Tchau [nome]" e finalizar o programa.
//- Aqui você pode usar while ou do/while para resolver

const r = require("readline-sync");

let name = r.question("Oi! Qual seu nome?");
console.log("Olá "+nome);

var word = r.question("Digite algo ou se quiser sair digite tchau:");


while(word!="tchau"){
    console.log(word)
    word = r.question("Digite algo ou se quiser sair digite tchau:");
}

/*Ou assim:
let nome = r.question("Digite seu nome:");
console.log("Olá "+nome)

let texto = " ";
do{
    texto = r.question("Digite algo ou 'tchau' pra sair");
    console.log("Você digitou: "+ texto");
}while(texto != "tchau");

console.log("Tchau, " + nome)*/