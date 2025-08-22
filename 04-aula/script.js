/*//Vetores = Array
var alunos = ["Cristiano", "Neymar", "Virginia", "Bruce"]


//Mostra todos os elementos do array
console.log(alunos);

//Mostra um valor de um a posição especifica do array
console.log(alunos[2]);

//Troca valor
alunos[3] = "Tiririca"

var aleatorio = ["Roda Gigante", 8, "Froagem", 1.5, 3, false, "Douglas"]

//Loop para mostrar todos os array
for(var i = 0; i < 7; i ++){
     console.log(aleatorio[i]);
    
}
for(var i = 0; i < aleatorio.length; i ++){
     console.log(aleatorio[i]);
}

//Array times
var times = ["Real Madrid", "Liverpool", "Desportiva Ferroviaria", "Milan"]

//index = número da caixinha no array
for(var index in times){
      console.log(index); //Mostra o numero da caixa que descobriu
      console.log(times[index]);// Mostrar o valor que tem na caixa    
}
*/

var frutas = ["Maça", "Uva", "Pêra"]
console.log(frutas);

//push - adciona o valor no fim do array
frutas.push("Mamão")
console.log(frutas);

// pop- tira o ultimo valor e retorna ele 
 var frutaTirada = frutas.pop()

console.log(frutaTirada);

// shift - tira o primeiro valor
var primeiraFruta = frutas.shift()
console.log(primeiraFruta);

// unshift - adciona um valor ou mais no inicio do array
var novaFruta = "Tomate"
frutas.unshift(novaFruta)
console.log(frutas)
