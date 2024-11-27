/*----------------OPERADORES DE COMPARAÇÃO---------------

1- São comumente utilizados para verificação nas estruturas de condição;
2- Operadores: ==, !=, >, <, >=, <=;
3- A partir de uma expressão de comparação podemos obter um true ou false

*/

var idade = prompt("Digite sua idade");

if(idade >= 18){
    alert("Você pode tirar sua CNH!")
}

if(idade <= 17){
    alert("Você não pode tirar sua CNH!")
}

//------------------------
var nome = "Paulo";

if(nome == "Paulo"){
    alert("Seu nome é" + nome)
}