interface Documento{
    titulo:string;
    conteudo:string;
}
 
class text implements Documento {
    constructor(public titulo:string,public  conteudo:string){

    }

    public exibirDocumento():string{
       return `Titulo: ${this.titulo}, Conteúdo: ${this.conteudo}.`;
    }
}

const meuDoc = new text(
    "Relatório Anual",
    "Os resultados financeiros superaram as expectativas no último trimestre."
);

const saidaFormat = meuDoc.exibirDocumento();

console.log(saidaFormatada);