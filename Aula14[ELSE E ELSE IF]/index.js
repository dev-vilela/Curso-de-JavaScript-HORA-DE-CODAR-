/*------------------CONDICIONAL: ELSE E ELSE IF------------------------
//EX 01
var nome = "João";

if(nome == "PEdro"){
    console.log("O nome é João")
}else if(nome == "João"){
    console.log("O nome é João")

}else{
    console.log("Ele possui outro nome")
}
    --------------------------------------

*/

var IdadeUsuario = prompt("Digite sua idade: ");

if(IdadeUsuario >= 18){
    console.log("Você pode fazer sua CNH. IDADE:" + IdadeUsuario )
}else if(IdadeUsuario == 17){
    console.log("Podemos realizar o pré-cadastro")
}else{
    console.log("Abaixo da idade não pode realizar o cadastro para tirar a CNH")
}