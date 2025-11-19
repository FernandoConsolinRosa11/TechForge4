var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.items = {};
    }
    Inventory.prototype.getInventory = function () {
        return this.items;
    };
    return Inventory;
}());
var WarehouseInventory = /** @class */ (function (_super) {
    __extends(WarehouseInventory, _super);
    function WarehouseInventory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WarehouseInventory.prototype.addItem = function (item, qtd) {
        if (qtd <= 0) {
            console.log("Quantidade de produtos deve ser maior que 0");
            return;
        }
        var qtd_atual = this.items[item] || 0;
        this.items[item] = qtd_atual + qtd;
        console.log("Armaz\u00E9m: Adicionado ".concat(qtd, " x do item ").concat(item, ". Total: ").concat(this.items[item]));
    };
    WarehouseInventory.prototype.removeItem = function (item) {
        if (this.items[item]) {
            delete this.items[item];
            console.log("Armaz\u00E9m: Item ".concat(item, " foi removido"));
        }
        else {
            console.log("Erro ao remover item do armazém");
        }
    };
    return WarehouseInventory;
}(Inventory));
var StoreInventory = /** @class */ (function (_super) {
    __extends(StoreInventory, _super);
    function StoreInventory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.max_qtd_item = 10;
        return _this;
    }
    StoreInventory.prototype.addItem = function (item, qtd) {
        if (qtd <= 0) {
            console.log("Quantidade de produtos deve ser maior que 0");
            return;
        }
        var qtd_atual = this.items[item] || 0;
        var qtd_potencial = qtd_atual + qtd;
        if (qtd_potencial > this.max_qtd_item) {
            var qtd_permitida = this.max_qtd_item - qtd_potencial;
            if (qtd_permitida > 0) {
                this.items[item] = this.max_qtd_item;
                console.log("Loja: N\u00E3o \u00E9 poss\u00EDvel adicionar ".concat(qtd, "x de ").concat(item, ". Limite m\u00E1ximo \u00E9 10. Apenas ").concat(qtd_permitida, " foram adicionados."));
            }
            else {
                console.log("Loja: Item '".concat(item, "' j\u00E1 est\u00E1 no limite m\u00E1ximo (").concat(this.max_qtd_item, "). Nada adicionado."));
            }
        }
        else {
            this.items[item] = qtd_potencial;
            console.log("Loja: Adicionado ".concat(qtd, "x de ").concat(item, ". Novo total: ").concat(this.items[item]));
        }
    };
    StoreInventory.prototype.removeItem = function (item) {
        if (this.items[item]) {
            this.items[item] -= 1;
            if (this.items[item] <= 0) {
                delete this.items[item];
                console.log("Loja: \u00DAltima unidade de '".concat(item, "' vendida e removida."));
            }
            else {
                console.log("Loja: Vendido 1x de ".concat(item, ". Restante: ").concat(this.items[item]));
            }
        }
        else {
            console.log("Erro: Item '".concat(item, "' n\u00E3o encontrado no invent\u00E1rio da loja."));
        }
    };
    return StoreInventory;
}(Inventory));
console.log("\n==================================");
console.log("Inventário do Armazém (Warehouse)");
console.log("==================================");
var warehouse = new WarehouseInventory();
warehouse.addItem("Parafuso M8", 5000);
warehouse.addItem("Tinta Branca", 100);
warehouse.addItem("Tinta Branca", 50);
console.log("\nInventário Atual do Armazém:", warehouse.getInventory());
warehouse.removeItem("Tinta Branca");
console.log("Inventário Atual do Armazém (Após remoção):", warehouse.getInventory());
console.log("\n==================================");
console.log("Inventário da Loja (Store)");
console.log("==================================");
var store = new StoreInventory();
store.addItem("Lâmpada LED", 8);
store.addItem("Lâmpada LED", 5);
store.addItem("Vaso Decorativo", 1);
store.addItem("Vaso Decorativo", 10);
console.log("\nInventário Atual da Loja:", store.getInventory());
store.removeItem("Lâmpada LED");
store.removeItem("Lâmpada LED");
store.removeItem("Vaso Decorativo");
console.log("Inventário Atual da Loja (Após remoções/vendas):", store.getInventory());
