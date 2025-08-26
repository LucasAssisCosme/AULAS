// Objeto window = janela navegador

//console.log(window.alert("oi"));

//window.prompt("Me diz um nome")

//Objeto document = codigo html do site

console.log(document);
console.log(document.head);
console.log(document.body);

//Acesando elementos do html
// por tag,  class e id

//Buscar elementos pela mesma tag
var titulos = document.getElementsByTagName("h1")
console.log(titulos);
//Buscar elementos pela mesma class
var paragrafos = document.getElementsByClassName("para")
console.log(paragrafos);
//Buscar elementos pelo ID
var achado = document.getElementById("p3")
console.log(achado);

//modoficando elemento da lista achado pela tag
titulos[1].style.color = "green"
titulos[2].style.backgroundColor = "pink"

//modoficando elemento da lista achado pela class
paragrafos[0].style.fontSize = "45px"
paragrafos[0].style.fontWeight = "bold"

//modoficando elemento achado pela id
achado.innerText = "tabua"

//Trocando texto pelo elemento
achado.innerText = "<h2> Novo texto </h2>"

//Trocando html do elemento
achado.innerHTML = "<h2> Novo texto </h2>"

// Criar função a ser ativada
function cliquei(){
    console.log("Você ganhou 100K");
    console.log("Só que do banco imobiliario");
    
}