/*-------------Operador Lógico OR ||--------------------
1 - Ele retorna TRUE caso uma das operações retorne verdadeiro;
2 - Retorna FALSE apenas se as duas expressões são falsas
*/

var Usuario = prompt("Digite seu usuario")

var usuarioCadastrado = 507;
var email = "paulo@gmail"

if (Usuario == usuarioCadastrado && email == "paulo@gmail") {
    console.log("Usuario encontrado!")
}else if(Usuario == usuarioCadastrado || email == "paulo@gmail"){
    console.log("Usuario errado, porem o email " + email + " foi encontrado")
} else if(Usuario == 507 && email == "paulo@gmai.com"){
    console.log("Usuario não encontrado!")
}
