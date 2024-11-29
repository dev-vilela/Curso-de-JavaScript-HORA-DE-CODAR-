/*-------------OPERADORES LÓGICOS &&
1 - Conhecido como AND
2 - Ele retorna apenas TRUE se as duas expressões forem TRUE

EX01
var idade = 16;
var nome = "Paulo";

if(nome == "Paulo" && idade == 16){
    console.log("Paulo pode entrar para festa")
}else{
    console.log("Usuario não identificado")
}
-------------------*/
var Usuario = prompt("Digite seu usuario")

var usuarioCadastrado = 507;
var email = "paulo@gmail"

if (Usuario == usuarioCadastrado && email == "paulo@gmail") {
    console.log("Usuario encontrado!")
}else{
    console.log("Usuario não encontrado!")

}


