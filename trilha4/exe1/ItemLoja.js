"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemLoja = void 0;
var ItemLoja = /** @class */ (function () {
    function ItemLoja(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    ItemLoja.prototype.exibirDetalhes = function () {
        console.log("ID: ".concat(this.id, ", Nome: ").concat(this.nome, ", Pre\u00E7o: ").concat(this.preco.toFixed(2)));
    };
    return ItemLoja;
}());
exports.ItemLoja = ItemLoja;
