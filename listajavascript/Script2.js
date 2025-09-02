var pessoa = {
    nome : "Jorge",
    idade : 90,
    apresentar : function(){
      console.log("Ola meu chamo ", pessoa.nome, " e tenho ", pessoa.idade);
      
    }
}
console.log(pessoa.nome);
pessoa.idade = 13
console.log(pessoa.idade);
pessoa.cidade = "Marco Santos"
console.log(pessoa);
pessoa.apresentar()

var turma = [
    aluno = {
       nome : "Douglas",
       idade : 20
    },
    aluno2 = {
       nome : "Carina",
       idade : 19
    },
    aluno3 = {
       nome : "Gabriel",
       idade : 22
    }

]
for(var i = 0; i < turma.length; i ++){
     console.log(turma[i]);
}


