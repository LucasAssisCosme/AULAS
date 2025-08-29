function quemMeChamou(individuo) {
    console.log(individuo);
    console.log("Class: ", individuo.class)
    console.log("Id: ", individuo.id)
    console.log("Name: ", individuo.name)
    console.log("Valor: ", individuo.value)
    
}
//ElementoQueChamou = parte do html que invocou a função
function trocaTexto(elementoQueChamou){
    //Mostrar o texto do html que chamou a função
    //console.log(elementoQueChamou);

    //cria uma variavel pra guardar quem ele achar com aquele id

    let textoAntigo = document.getElementById("textoParaTrocar")
   
    //Usar o innerhtml para subisituir o que tava dentro do textoantigo, pro valor que está na caixinha do elemento que chamou a função 
    textoAntigo.innerHTML = elementoQueChamou.value
}

function troca(elementoQueChamou){
    let antigo = document.getElementById("textoOutro")
    antigo.innerHTML = elementoQueChamou.value
}
function corVermelha(elemento){
     elemento.style.color = "red"
     elemento.style.fontSize = "60px"

}
function corAzul(elemento){
     elemento.style.color = "blue"
     elemento.style.fontSize = "20px"
}