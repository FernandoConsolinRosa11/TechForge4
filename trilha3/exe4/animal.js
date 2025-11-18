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
var Animal = /** @class */ (function () {
    function Animal(especie, energiainicial) {
        if (energiainicial === void 0) { energiainicial = 50; }
        this.especie = especie;
        this.energia = energiainicial;
        console.log("Um ".concat(this.especie, " nasceu com ").concat(this.energia, " de energia."));
    }
    Object.defineProperty(Animal.prototype, "_energia", {
        get: function () {
            return this.energia;
        },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.alterarEnergia = function (delta) {
        this.energia += delta;
        return this.energia;
    };
    Animal.prototype.mostrarEnergia = function () {
        console.log("O ".concat(this.especie, " tem energia atual de: ").concat(this.energia));
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao(nome, energiaInicial) {
        if (energiaInicial === void 0) { energiaInicial = 70; }
        var _this = _super.call(this, "Leão", energiaInicial) || this;
        _this.nome = nome;
        return _this;
    }
    Leao.prototype.comer = function (energiaRefeicao) {
        var gastoCaca = 20;
        console.log("\n ".concat(this.nome, " (Le\u00E3o) iniciou a ca\u00E7ada..."));
        var energiaAtual = this.alterarEnergia(-gastoCaca);
        console.log("   -> Gastou ".concat(gastoCaca, " de energia na ca\u00E7ada. Energia atual: ").concat(energiaAtual));
        var energiaFinal = this.alterarEnergia(energiaRefeicao);
        console.log("   -> Consumiu a presa e ganhou ".concat(energiaRefeicao, " de energia. Energia final: ").concat(energiaFinal));
    };
    return Leao;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro(nome, energiaInicial) {
        if (energiaInicial === void 0) { energiaInicial = 30; }
        var _this = _super.call(this, "Pássaro", energiaInicial) || this;
        _this.nome = nome;
        return _this;
    }
    Passaro.prototype.comer = function (energiaRefeicao) {
        console.log("\n".concat(this.nome, " (P\u00E1ssaro) est\u00E1 se alimentando..."));
        var energiaFinal = this.alterarEnergia(energiaRefeicao);
        console.log("   -> Ganhou ".concat(energiaRefeicao, " de energia. Energia final: ").concat(energiaFinal));
    };
    return Passaro;
}(Animal));
var leaoSimba = new Leao("Simba", 80);
var passaroPiu = new Passaro("Piu", 40);
var animais = [leaoSimba, passaroPiu];
console.log("\n" + "=".repeat(50));
console.log("=".repeat(50));
leaoSimba.comer(50);
passaroPiu.comer(10);
