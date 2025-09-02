var cores = [
     "vermelho",
     "Azul",
     "Amarelo" 
]
console.log(cores);
console.log(cores[0]);
cores.push("Preto")
console.log(cores);
cores.splice(1,1, "Verde")
console.log(cores);
for(var i = 0; i < cores.length; i ++){
     console.log(cores[i]);
}
for(var index in cores){
      console.log(index);
      console.log(cores[index]);    
}
var numeros = [
    2,
    4,
    6,
    8,
    10
]
    let soma = 0;
    for (let j = 0; j < numeros.length; j++) {
      soma += numeros[j];
    }
    console.log(soma);





