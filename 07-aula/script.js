var produto1 = {
    nome : "Coca-Cola",
    categoria : "Bebidas",
    tamanhos : ["200 ml","Lata", "600ml", "2L"],
    quantidade : 7,
    descricao : function(){
        //Produto X é da categoria X
        console.log("O produto ",this.nome ," é da categoria", this.categoria);
        
    },
     verTamanhos : opcoes
}


//console.log(produto1);
var produto2 = {
    nome : "Oreo",
    categoria : "biscoitos",
    tamanhos : ["Normal","Barra", "Sorvete"],
    quantidade : 10,
    descricao : function(){
        //Produto X é da categoria X
        console.log("O produto ",this.nome ," é da categoria", this.categoria);
        
    },
     verTamanhos : opcoes
}
//Mostar descrição com o uso do this internamente 
//produto1.descricao()
//produto2.descricao()

function opcoes(){
    let tmh = ""
    
    for (index in this.tamanhos){
         //tmh + this.tamanhos[index] + ", ";
         tmh += this.tamanhos[index] + ", "
         //console.log(tmh);
         
    }
    
    console.log("As opções de tamanho são: ", tmh);
    
    
}
produto1.verTamanhos()
produto2.verTamanhos()