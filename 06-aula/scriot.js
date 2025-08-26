var aluno = {
    nome : "Rodolfo",
    anoEscolar : "2 ano",
    turma : "C",
    notas : [6,8,7],
    estudar : function(){
        console.log("Estou estudando");
        
    },
    //metodo com função interna
    media : function(n1,n2,n3){
         return ((n1+n2+n3) / 3)
    },
    //metodo com função externa
    ocorrencias : listaDeocorrencias 
}
// Acessa propriedades do objeto aluno
console.log("O aluno ", aluno.nome, " Está no ", aluno.anoEscolar, " Escolar");
//metodo dentro de um objeto
aluno.estudar()
console.log("Média final: ", aluno.media(aluno.notas[0], aluno.notas[1], aluno.notas[2]));

// Cria função extrena para utilização do objeto
function listaDeocorrencias() {
    console.log("Comeu na biblioteca");
    console.log("Xingou no corredor da escola");
    console.log("Não fez trabalho");
    
}


