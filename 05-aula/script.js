console.log("Oi");

// com array

var alunos = ["Pedro", "Tiago", "João"];
var medias = [7, 8, 6];

console.log("O aluno: ", alunos[0], "Teve média de: ", medias[2]);

// com objeto
var estudante = {
  nome: "Cristiano", //Virgula importante
  nota1: 8,
  nota2: 9,
  media: 8.5,
};
console.log(estudante.nome); //ponto diz qual a propriedade, que eu quero acessar dentro do objeto
console.log(estudante.nota1);
console.log(estudante.nota2);
console.log(estudante.media);

var canetaoBraba = {
    pertece : "Professor seu jorge",
    corDatinta: "Vermelha",
    temTinta: true,
    quantosJogosdaVelhajaFez: 2000000,
    temOutrascanetasBrabas: false
    
}
console.log("Pertece a: ", canetaoBraba.pertece, "Tem tinta: ", canetaoBraba.temTinta, "Cor? ", canetaoBraba.corDatinta, "Quantos Jogos da velha já fez? ", canetaoBraba.quantosJogosdaVelhajaFez);

//Objeto escolar com 4 caracteristicas

var intervalo = {
    tempoTotal : "20 min",
    horaIncio : "15h30",
    horaFim : "15h50",
    local : "Pátio",
    dormir: true
}
console.log (intervalo.horaIncio, " Até ", intervalo.horaFim);

//Outra forma de acessar propriedade
console.log("Onde: ", intervalo["local"]);
console.log("Tem mais dessas na escola: ", canetaoBraba["temOutrascanetasBrabas"]);

// criando um objeto vazio
var garrafa = {}
console.log(garrafa);

// adcionando novas propriedades em um objeto que já existe
garrafa.preco = 430
garrafa.cor = "amarelo"
garrafa.tamanho = 2.5
garrafa ["validade"] = "1 ano"

console.log(garrafa);
//alterar valor já existente
garrafa.preco = 429.99
garrafa["validade"] = "2 anos"
console.log(garrafa);

//Criar uma nova propriedade
var novaPropriedade = "apelido"
garrafa[novaPropriedade] = "Aristóteles"
console.log(garrafa.apelido);

//criar funções
var animal = {
    // Variaveis = Propriedades
    nome : "luke",
    especie: "Largato",
    raca: "adidas",
    // Função = Método
    andar: function(){
        console.log("Estou andando");
        
    },
    latir: function(){
        console.log("Au miau ((Bizzaro))");
        
    }

}
console.log("O nome é: ", animal.nome);

animal.andar()
animal.latir()

