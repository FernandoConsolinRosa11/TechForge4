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
var VoteSystem = /** @class */ (function () {
    function VoteSystem() {
        this.votes = {};
    }
    return VoteSystem;
}());
var Election = /** @class */ (function (_super) {
    __extends(Election, _super);
    function Election() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Election.prototype.voteFor = function (candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log("Elei\u00E7\u00E3o: Voto registrado para ".concat(candidate, "."));
    };
    Election.prototype.getResults = function () {
        console.log("Eleição: Retornando total de votos por candidato.");
        return this.votes;
    };
    return Election;
}(VoteSystem));
var Poll = /** @class */ (function (_super) {
    __extends(Poll, _super);
    function Poll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Poll.prototype.voteFor = function (candidate) {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
        console.log("Enquete: Voto registrado para ".concat(candidate, "."));
    };
    Poll.prototype.getResults = function () {
        console.log("Enquete: Retornando candidatos ordenados por votos.");
        var resultsArray = Object.entries(this.votes);
        var mappedResults = resultsArray.map(function (_a) {
            var name = _a[0], votes = _a[1];
            return ({ name: name, votes: votes });
        });
        mappedResults.sort(function (a, b) { return b.votes - a.votes; });
        return mappedResults;
    };
    return Poll;
}(VoteSystem));
console.log("\n==================================");
console.log("Sistema de Eleição (Election)");
console.log("==================================");
var eleicao = new Election();
eleicao.voteFor("Alpha");
eleicao.voteFor("Beta");
eleicao.voteFor("Alpha");
eleicao.voteFor("Gama");
eleicao.voteFor("Beta");
eleicao.voteFor("Alpha");
console.log("\nResultados da Eleição:");
console.log(eleicao.getResults());
console.log("\n==================================");
console.log("Sistema de Enquete (Poll)");
console.log("==================================");
var enquete = new Poll();
enquete.voteFor("Tecnologia");
enquete.voteFor("Esporte");
enquete.voteFor("Arte");
enquete.voteFor("Tecnologia");
enquete.voteFor("Tecnologia");
enquete.voteFor("Arte");
console.log("\nResultados da Enquete (Ordenados):");
console.log(enquete.getResults());
