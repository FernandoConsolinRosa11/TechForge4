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
var Funcionario = /** @class */ (function () {
    function Funcionario(_nome, _salario) {
        this._nome = _nome;
        this._salario = _salario;
    }
    Object.defineProperty(Funcionario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        enumerable: false,
        configurable: true
    });
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, salario) {
        return _super.call(this, nome, salario) || this;
    }
    Gerente.prototype.calcularBonus = function () {
        return this.salario * 0.10;
    };
    return Gerente;
}(Funcionario));
var Operario = /** @class */ (function (_super) {
    __extends(Operario, _super);
    function Operario(nome, salario) {
        return _super.call(this, nome, salario) || this;
    }
    Operario.prototype.calcularBonus = function () {
        return this.salario * 0.05;
    };
    return Operario;
}(Funcionario));
function calcularSalarioComBonus(funcionarios) {
    console.log("----- Cálculo de Salário Final com Bônus -----");
    funcionarios.forEach(function (funcionario) {
        var bonus = funcionario.calcularBonus();
        var salarioFinal = funcionario.salario + bonus;
        console.log("\nNome: ".concat(funcionario.nome));
        console.log("Cargo: ".concat(funcionario instanceof Gerente ? 'Gerente' : 'Operário'));
        console.log("Sal\u00E1rio Base: R$".concat(funcionario.salario.toFixed(2)));
        console.log("B\u00F4nus: R$".concat(bonus.toFixed(2)));
        console.log("Sal\u00E1rio Final: R$".concat(salarioFinal.toFixed(2)));
    });
}
var funcionario1 = new Gerente("Donald Trump", 10000.00);
var funcionario2 = new Operario("Putin", 2000.00);
var listafuncionarios = [
    funcionario1,
    funcionario2
];
calcularSalarioComBonus(listafuncionarios);
