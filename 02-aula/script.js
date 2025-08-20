//Interação como usuário via prompt
/*var nome = prompt("Digite um nome: ")

alert("Seu nome é: " + nome)*/

//CONDICIONAIS

//SE, SENÃO SE, SENÃO
//IF, IF ELSE, ELSE

var estaVivo = 7

if(estaVivo == true){
   console.log("Parabens, Você está vivo :)")
}
else if(estaVivo == false){
     console.log("Infelizmente, Você está morto :(")
}
else{
    console.log("Você não está nada :/")
}

// Escolha / Caso
// Switch / Case

var corCamisa = "Amarela"

switch(corCamisa){
    case "Azul": 
    console.log("Você ganhou um voucher")
    break
    case "Amarela": 
    console.log("Você ganhou um body splash")
    break
    case "Vermelha": 
    console.log("Você ganhou um brinde")
    break
    default: 
    console.log("Cor de camisa invalida")
    break

}

//até 5 = reprovado, 5 a 6 = Recuperação
//Acima de 6 = passou

/*var nota = prompt("Digite sua nota: ")
var media = 6

if( Number(nota) > media){

    alert("Você passou!!!")
}
else if( Number(nota) >= 5 && nota <= media){

    alert("Você ta de recuperação!!!")
}
else{

    alert("Você reprovou!!!")
}*/

var idade1 = prompt("Digite sua idade: ")
var idade2 = prompt("Digite a idade do seu acomponhate: ")
var valorTotal1
var valorTotal2
var valorTotal3


//Defnir valor primeiro ingresso
if(idade1 <= 17){
   valorTotal1 = 15
}
else if(idade1 >= 18 && idade1 < 60){
   valorTotal1 = 30
}
else{
   valorTotal1 = 20
}

//Definir valor segundo ingresso
if(idade2 <= 17){
   valorTotal2 = 15
}
else if(idade2 >= 18 && idade2 < 60){
   valorTotal2 = 30
}
else{
   valorTotal2 = 20
}

valorTotal3 = valorTotal1 + valorTotal2

alert("Seu valor total a pagar é: " + valorTotal3)

