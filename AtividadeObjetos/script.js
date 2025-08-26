var carro = {
    marca : "Toyota",
    modelo : "Lamborghini",
    ano : 2000
}
console.log(carro);
console.log(carro.modelo);
carro.ano = 2009
console.log(carro);
carro.cor = "amarelo"
console.log(carro);

var pessoa = {
    nome : "Jonhatan",
    idade : 20,
    apresentar : function(){
       console.log("Olá, meu nome é ", pessoa.nome, " e tenho ", pessoa.idade, " de idade");
       
    }

}
pessoa.apresentar()

