"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
var Loja = /** @class */ (function () {
    function Loja(produtosInicias) {
        if (produtosInicias === void 0) { produtosInicias = []; }
        this.catalogo = [];
        this.catalogo = produtosInicias;
    }
    Loja.prototype.adicionarProduto = function (produto) {
        this.catalogo.push(produto);
        console.log("Produto: ".concat(produto.nome, ", Codigo: ").concat(produto.codigo));
    };
    Loja.prototype.buscarProdutoPorCodigo = function (codigo) {
        return this.catalogo.find(function (p) { return p.codigo === codigo; });
    };
    return Loja;
}());
exports.Loja = Loja;
var p1 = { codigo: 101, nome: "Notebook Pro" };
var p2 = { codigo: 102, nome: "Mouse Óptico" };
var p3 = { codigo: 205, nome: "Monitor 4K" };
var minhaLoja = new Loja([p1, p2]);
minhaLoja.adicionarProduto(p3);
var buscaSucedida = minhaLoja.buscarProdutoPorCodigo(102);
var produtoNaoEncontrado = minhaLoja.buscarProdutoPorCodigo(999);
