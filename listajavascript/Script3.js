function boasVindas(){
    console.log("Bem vindo(a) ao curso de Javascript"); 
}
boasVindas()

var nome = "lucas"
function saudar(nome){
    console.log("Olá, "+ nome);
}
saudar(nome)
var numero = 4
function dobro(numero){
    let dobro
    dobro = numero * 2 
    return dobro
}
var numeroDobrado = dobro(numero)
console.log("O dobro do numero é igual á: ", numeroDobrado);

var numero1 = 6
var numero2 = 4

function soma(valor1 , valor2){
    let somador
    somador = valor1 + valor2
    return somador
}
var valorSomado = soma(numero1, numero2)
console.log("A soma dos dois valores é igual á: ", valorSomado);

var numeros = [10,7]


function media(V1 , V2){
    
    let mediaCalulada 
    mediaCalulada = (V1 + V2) / 2
    return mediaCalulada
}
var mediaAtual = media(numeros[0], numeros[1])
console.log("A media é igual á: ", mediaAtual);

var gente = {
    nome : "Batman",
    idade : 33
}

function descricaoPessoal(nois){
      console.log(gente.nome, " Tem a idade de ", gente.idade ," anos");
      
}
descricaoPessoal(gente)


var N1 = 9
var N2 = 10
var calculadora = {
    multiplicar : function(VA1, VA2){
          let multi
          multi = VA1 * VA2
          console.log("O valor da multiplicação é igual á ", multi);
          
          
    }
}
calculadora.multiplicar(N1,N2)







