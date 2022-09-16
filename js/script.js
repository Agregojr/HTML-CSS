document.write("<h1>Estamos executando script.js</h1>");
document.write("Este script está sendo chamado no HEAD");
console.log("Primeiro");
console.log("Segundo");

// Comentário de uma linha
//CTRL + ;

/*
Atalho para cometário de várias linhas
ALT + SHIFT + A
*/

// Tipagem fraca

var teste = 1;

document.write("<hr> O valor da variável teste é " + teste + "</hr>")


var teste = "Amaury"
document.write("<hr> O valor da variável teste é " + teste + "</hr>")

nome = "Carlos"
console.log(nome.toUpperCase())

var v1 = 5.25
let v2 = null
const v3 = "teste"
console.log(typeof(v1))
console.log(typeof(v2))
console.log(typeof(v3))
console.log(typeof(NaN))
console.log(typeof(Null))
console.log(typeof+Infinity)
const numero = "1"

//Operadores de comparação
console.log(numero==1)
console.log(numero===1)

// Adicionar uma lista no body do HTML

var list = ['arroz', 'feijão', 'carne', 'macarrão'];
var listaUl = document.createElement('ul');


//Acessar  elementos através do DOM

var body = document.getElementsByTagName('body');

console.log(listaUl);
console.log(body);

alert("Vamos criar uma lista agora!");
body[0].appendChild(listaUl)

for(var i =0; i< list.length;i++){
    var liFor = document.createElement('li')
    var textoLi = document.createTextNode(list[i])
    liFor.appendChild(textoLi)
    listaUl.appendChild(liFor)
}
    document.write('A ul <b>ACIMA<b> foi criada dinamicamente sendo usado javascript')











