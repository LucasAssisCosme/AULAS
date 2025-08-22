console.log("vamos que vamos");

//Laços de repetição

//PARA = FOR
for (var i = 0; i < 5; i++) {
  console.log("Ainda estoy ahí");
  console.log("estou aqui");
}

console.log("Acabou de repetir");

//Enquanto = While

var contagem = 0;
while (contagem < 10) {
  console.log("Estou repentido inifinitamente");
  contagem++;
}

//Exercicio 1
/*var numero = prompt("Insira um numero")

for(var i = 0; i <= numero; i++){

    console.log("Numero atual  da contagem: " + i);
}

alert("Acabou, so olhar no console !!!")*/

//Exercicio 2
/* var senha = "0"

 while( senha != "4"){
     var senha = prompt("DIgite uma senha: (Dica: Número que dar azar no japão)")
 }
 console.log("Você entrou !!!")*/

// Funções

/* //Cria função
 function bemVindo(){
     var nome = prompt ("Nome: ")
     console.log("Olá, ", nome)

 }

 //Chama a  função
 bemVindo()

 //Função com parametro
function calcularIdade(idade){
    alert("Sua idade é: "+ idade)

}

calcularIdade(18)
calcularIdade(100)*/

/*var numero1 = prompt("Escreva um número")
var numero2 = prompt("Escreva outro número")

Maior(Number(numero1) , Number(numero2))

function Maior(valor1, valor2){
if( Number(valor1) > Number(valor2)){
      alert("Numero 1 é maior")
}
else if( Number(valor2) > Number(valor1)){
      alert("Numero 2 é maior")
}
else{
      alert("Ambos dos números são iguais")
}
}*/

// funções com retorno

/*function soma (valor1, valor2) {
    let resultado = valor1 + valor2

    return resultado
}

var valorSomado = soma(7, 6)

console.log("A soma deu: ", valorSomado)*/

var senha = "0";
var saldo = 400;

while (senha != "4") {
  senha = prompt("Digite sua senha: ");
}

usuario();

function usuario() {
  alert("Bem vindo, Lucas Assis. Seu saldo é: " + saldo);
  var decida = prompt("Deseja realizar: 1 - Saque, 2 - Depósito");

  if (Number(decida) === 2) {
    deposito();
  } else if (Number(decida) === 1) {
    saque();
  } else {
    alert("Opção inválida.");
    usuario(); // volta pro menu
  }
}

function deposito() {
  let colocar = prompt("Digite o valor que quer depositar: ");
  saldo = saldo + Number(colocar);
  alert("Depósito realizado! Seu novo saldo é: " + saldo);
  novaTentativa();
}

function saque() {
  let tirar = prompt("Digite o valor que quer sacar: ");
  if (Number(tirar) > saldo) {
    alert("Saldo insuficiente!");
  } else {
    saldo = saldo - Number(tirar);
    alert("Saque realizado! Seu novo saldo é: " + saldo);
  }
  novaTentativa();
}

function novaTentativa() {
  var opcao = prompt("Deseja realizar outra operação? 1 - Sim | 2 - Não");
  if (Number(opcao) === 1) {
    usuario();
  } else {
    fim();
  }
}

function fim() {
  alert("Obrigado por usar o banco C&G!");
}
