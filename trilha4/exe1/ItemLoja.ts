interface Produto{
    id:number;
    nome:string;
    preco:number;
}



export class ItemLoja implements Produto{
    constructor(public id:number, public nome:string , public preco:number){

    }

    public exibirDetalhes():void{
        console.log(`ID: ${this.id}, Nome: ${this.nome}, Preço: ${this.preco.toFixed(2)}`);
    }
}