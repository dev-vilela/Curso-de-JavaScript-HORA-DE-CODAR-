/*----------------ESTRUTURA DE REPETIÇÃO-----------------------

1 - Servem para repetir N vezes uma operação;
2 - Estruturas mais comuns são: WHILE e FOR

--------------WHILE------------
1 - É a estrutura de repetição mais simples do JS;
2 - A ideia é que se repita algo até atingir tal condição;
3 - While > Enquanto
*/

var x = 0;

while(x <  5){
     console.log("Testando repetição " + x);

     x++
}

var arr = ['teste', 'testando', 'a', 'b'];
var y = 0;

while(y <= 3){
    console.log(arr[y])

    y++
}

var palavra = "Paulo";
var i = 0;

while(i <= 5){
    console.log(palavra[i])

    i++;
}