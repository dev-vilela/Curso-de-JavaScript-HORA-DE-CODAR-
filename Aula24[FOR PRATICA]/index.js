var lista = ["Laranja", "Maça", "Banana", "Pera", "Maracuja", "Jaca"]

var listaUl = document.createElement('ul');

var body = document.getElementsByTagName('body')

console.log(body[0])

body[0].appendChild(listaUl)

var listaBody = document.getElementsByTagName('ul');

console.log(listaBody[0])

for(var i = 0; i < lista.length; i++){
    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i])

    liFor.appendChild(textoLi);

    listaBody[0].appendChild(liFor)
}