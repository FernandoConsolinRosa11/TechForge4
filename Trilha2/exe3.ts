class Produto {
    preco: number;
    nome: string;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorTotal(): number {
        return this.preco * this.quantidade;
    }
}

const produto1 = new Produto("Notebook", 3500, 5);
console.log(`Produto: ${produto1.nome}`);
console.log(`Valor total em estoque: R$ ${produto1.calcularValorTotal().toFixed(2)}`);