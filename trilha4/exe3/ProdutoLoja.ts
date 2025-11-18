export interface ProdutoLoja {
    codigo: number;
    nome: string;
}

export class Loja {

    private catalogo: ProdutoLoja[] = [];

    constructor(produtosInicias: ProdutoLoja[] = []) {
        this.catalogo = produtosInicias;
    }

    public adicionarProduto(produto: ProdutoLoja): void {
        this.catalogo.push(produto);
        console.log(`Produto: ${produto.nome}, Codigo: ${produto.codigo}`);

    }

    public buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.catalogo.find(p => p.codigo === codigo);
    }
}

const p1: ProdutoLoja = { codigo: 101, nome: "Notebook Pro" };
const p2: ProdutoLoja = { codigo: 102, nome: "Mouse Óptico" };
const p3: ProdutoLoja = { codigo: 205, nome: "Monitor 4K" }

const minhaLoja = new Loja([p1, p2]);
minhaLoja.adicionarProduto(p3);

const buscaSucedida  = minhaLoja.buscarProdutoPorCodigo(102);
const produtoNaoEncontrado = minhaLoja.buscarProdutoPorCodigo(999);
