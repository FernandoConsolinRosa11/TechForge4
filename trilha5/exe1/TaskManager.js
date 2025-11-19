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
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype._taskexist = function (taskName) {
        return this.tasks.some(function (task) { return task.name === taskName; });
    };
    return TaskManager;
}());
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Project.prototype.addTask = function (taskName) {
        if (!this._taskexist(taskName)) {
            var newTask = {
                name: taskName,
                categoria: "Projeto"
            };
            this.tasks.push(newTask);
            console.log("Novo Projeto Adicionado!");
        }
        else {
            console.log("O Projeto já existe!");
        }
    };
    Project.prototype.listTasks = function () {
        return this.tasks;
    };
    return Project;
}(TaskManager));
var Diaria = /** @class */ (function (_super) {
    __extends(Diaria, _super);
    function Diaria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Diaria.prototype.addTask = function (taskName) {
        if (!this._taskexist(taskName)) {
            var newTask = {
                name: taskName,
                categoria: "Diária"
            };
            this.tasks.push(newTask);
            console.log("Nova tarefa Diária Adicionado!");
        }
        else {
            console.log("A tarefa já existe!");
        }
    };
    Diaria.prototype.listTasks = function () {
        return this.tasks;
    };
    return Diaria;
}(TaskManager));
console.log("--- Gerenciando Projeto ---");
var meuProjeto = new Project();
meuProjeto.addTask("Desenhar Wireframe");
meuProjeto.addTask("Codificar API");
console.log("--- Gerenciando Diárias ---");
var diarias = new Diaria();
diarias.addTask("Corrigir Bugs");
diarias.addTask("Exportar Banco de dados");
console.log("--- Listando Tarefas ---");
console.log("Projetos:", meuProjeto.listTasks());
console.log("Diárias:", diarias.listTasks());
