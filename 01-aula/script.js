// Comentario de uma linha só

/*

Comentar
Varias
Linhas

*/

//Console.log = Escreva no portugol

console.log("Olá,Cristiano Ronaldo")

//Cria uma janela de alerta na pagina
//alert("Testa ai e vê")

var nome = "Cris"
console.log("O nome é: " + nome)

//Cadeia = 
var texto = "Santos"
console.log(typeof(texto))


//inteiro = number, int
var numero = 1985
console.log(typeof(numero))

//inteiro = number, float
var quebrado = 1.9
console.log(typeof(quebrado))

//logico = bool
var VouF = true
console.log(typeof(VouF))

// nulo = nulo mesmo
var nulo = null
console.log(typeof(nulo))

//Variavel sem valor iniciado
var indefinido = undefined
console.log(typeof(indefinido))

//operadores aritimeticos
// +, -, *, /, %

var a = 10
var b = 3

console.log("A soma de "+ b+ " + "+ a +" é igual á " + (a+b))
console.log("A subtração de "+ b+ " - "+ a +" é igual á " + (a-b))
console.log("A multiplicação de "+ b+ " * "+ a +" é igual á " + (a*b))
console.log("A divisão de "+ b+ " / "+ a +" é igual á " + (a/b))
console.log("O que sobrou de "+ b+ " % "+ a +" é igual á " + (a%b))

//operadores logicos
// e, ou , não
// &&, ||, ! = not

var verdadeira = true 
var mentira = false

// comparação com E
console.log( verdadeira && mentira)

// comparação com Ou
console.log( verdadeira || mentira)

// comparação com com negação
console.log( verdadeira && !mentira)

// operadores relacionais
// > , <, >=, <=, ==, !=, ===, !==

var b1 = 15
var a1 = 7
var c1 = "7"

console.log(a1>b1)
console.log(a1<b1)
console.log(a1>=b1)
console.log(a1<=b1)
console.log(a1==b1)
console.log(a1!=b1)

console.log(a1==c1) //compara so o valor
console.log(a1===c1)// compara tipo e valor
console.log(a1!==b1)// compara tipo e valor


//interação com o usuario via comando prompt
var numero = prompt("Digite um numero: ")
var numero2 = prompt("Digite outro numero: ")

var resultado = Number(numero) + Number(numero2)

console.log("O resultado da soma é: " + resultado)

alert("O resultado da soma é: " + resultado)