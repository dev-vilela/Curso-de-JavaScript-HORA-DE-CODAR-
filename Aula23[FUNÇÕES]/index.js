/*-----------------Funções----------------
1 - São blocos de códicgos reutilizáveis
*/

function primeiraFuncao(){
    console.log("Funçoes")
}

primeiraFuncao()

function dizerNome(nome){
    console.log("Seu nome é " + nome)
}

//dizerNome(prompt("Digite seu nome:"))

function soma(a, b){
    var soma = a + b;

    return soma;
}

var somaUm = soma(2, 5);

console.log(somaUm)